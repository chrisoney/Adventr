import React from 'react';
import Loading from '../loading/loading'

class NewQuestForm extends React.Component {
  constructor(props) {
    super(props);
    const { type, currentUser, quest, reblog } = this.props;
    this.state = {
      currentUser_id: currentUser.id,
      questId: quest ? quest.id : null,
      reblogId: reblog ? reblog.id : null,
      type: type,
      title: quest ? quest.title : '',
      text: quest ? quest.text : '',
      reblogText: reblog ? reblog.text : '',
      tags: reblog ? reblog.tag_joins.map(tag_join => tag_join.tag.tag_name) : quest ? quest.tag_joins.map(tag_join => tag_join.tag.tag_name) : [],
      oldImageUrls: quest ? quest.imageUrls : null,
      imageUrls: null,
      imageFiles: null,
      errors: null,
      allowSubmit: false,
      loading: false,
    };
    // this.reference = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.deletePreviewImage = this.deletePreviewImage.bind(this);
    this.createTag = this.createTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  componentWillUnmount() {
    if (this.props.model === 'Quest') {
      this.props.fetchAllQuests()
    } else {
      this.props.fetchAllReblogs()
    }
  }

  deleteTag(e) {
    const tagToDelete = e.target.innerHTML.slice(1);
    const index = this.state.tags.indexOf(tagToDelete);
    const newTagArray = this.state.tags
      .slice(0, index)
      .concat(this.state.tags.slice(index + 1, this.state.tags.length));
    this.setState({ tags: newTagArray });
    if (this.props.task === 'edit') {
        let model;
        if (this.props.model === 'Quest') model = this.props.quest;
        else if (this.props.model === 'Reblog') model = this.props.reblog;
        model.tag_joins.forEach((tag_join) => {
        if (tag_join.tag.tag_name === tagToDelete) {
          this.setState({ allowSubmit: false });
          this.props.removeTagAction(tag_join.id).then(() => {
            this.setState({ allowSubmit: true });
          })
        }
      })
    }
  }

  createTag(e) {
    const that = this;
    if (e.key === 'Enter' && e.target.value !== '') {
      let tag = e.target.value.toLowerCase();
      if (tag[0] === '#') tag = tag.slice(1);
      if (this.state.tags.indexOf(tag) === -1) {
        this.setState({ tags: this.state.tags.concat([tag]) });
        if (this.props.task === 'edit') {
          this.setState({ allowSubmit: true });
        }
        
        // console.log(e.target);
        // const newDiv = document.createElement('div');
        // newDiv.classList.add('enteredTag');
        // newDiv.innerHTML = `#${tag}`;
        // newDiv.addEventListener('click', (e) => {
        //   const tagToDelete = e.target.innerHTML.slice(1);
        //   const index = this.state.tags.indexOf(tagToDelete);
        //   const newTagArray = this.state.tags
        //     .slice(0, index)
        //     .concat(this.state.tags.slice(index + 1, this.state.tags.length));
        //   this.setState({ tags: newTagArray });
        //   e.target.remove();
        // });
        // e.target.parentElement.insertBefore(newDiv, e.target);
      }
      e.target.value = null;
    } else if (
      e.key === 'Backspace' &&
      this.state.tags.length > 0 &&
      e.target.value === ''
    ) {
      const lastEle = this.state.tags.length - 1;
      const tagToDelete = this.state.tags[lastEle]
      this.setState({ tags: this.state.tags.slice(0, lastEle) });
      if (this.props.task === 'edit') {
        let model;
        if (this.props.model === 'Quest') model = this.props.quest;
        else if (this.props.model === 'Reblog') model = this.props.reblog;
        model.tag_joins.forEach((tag_join) => {
          if (tag_join.tag.tag_name === tagToDelete) {
            that.setState({ allowSubmit: false });
            that.props.removeTagAction(tag_join.id).then(() => {
              that.setState({ allowSubmit: true });
            })
          }
        })
      }

    }
  }

  handleInput(type) {
    if (type !== 'tags') {
      return (e) => {
        this.setState({ [type]: e.currentTarget.value });
      };
    }
  }

  handleUpload(e) {
    let that = this;
    let fileArr = [];
    let urlArr = [];

    if (this.state.imageFiles !== null) {
      fileArr = fileArr.concat(this.state.imageFiles);
      urlArr = urlArr.concat(this.state.imageUrls);
    }

    let uploadedImages = e.currentTarget.files;

    for (let i = 0; i < uploadedImages.length; i++) {
      let file = uploadedImages[i];
      let fileReader = new FileReader();

      fileReader.onloadend = () => {
        fileArr = fileArr.concat(file);
        urlArr = urlArr.concat(fileReader.result);
        that.setState({
          imageFiles: fileArr,
          imageUrls: urlArr,
        });
      };
      if (file) fileReader.readAsDataURL(file);
    }
  }

  deletePreviewImage(idx) {
    let index = idx.idx;

    let imageUrls = this.state.imageUrls.slice();
    let imageFiles = this.state.imageFiles.slice();

    imageUrls.splice(index, 1);
    imageFiles.splice(index, 1);

    if (imageUrls && imageUrls.length === 0) imageUrls = null;
    if (imageFiles && imageFiles.length === 0) imageFiles = null;

    this.setState({
      imageUrls: imageUrls,
      imageFiles: imageFiles,
    });
  }

  handleSubmit(e) {
    let allow = this.state.allowSubmit;
    const that = this;
    const tagInput = document.getElementById('tagInput');
    e.preventDefault();

    if (
      this.state.title !== '' ||
      this.state.text !== '' ||
      this.state.imageFiles !== null ||
      this.state.allowSubmit) {
      allow = true;
    }

    if (tagInput.value !== '') {
      const tag = [tagInput.value];
      this.setState({ tags: this.state.tags.concat(tag) });
      const newDiv = document.createElement('div');
      newDiv.classList.add('enteredTag');
      newDiv.innerHTML = `#${tagInput.value}`;
      tagInput.parentElement.insertBefore(newDiv, tagInput);
      tagInput.value = null;
    }
    if (allow) {
      this.setState({ allowSubmit: false });
      const formData = new FormData();
      // Quest
      const imageFiles = this.state.imageFiles;
      const questId = this.state.questId;
      const reblogId = this.state.reblogId;
      if (this.props.model === 'Quest') {
        if (questId) formData.append('quest[id]', questId)
        formData.append('quest[title]', this.state.title);
        if (imageFiles) {
          imageFiles.forEach((image, idx) => {
            formData.append('quest[images][]', imageFiles[idx]);
          });
        }
        formData.append('quest[text]', this.state.text);
        formData.append('quest[quest_type]', this.state.type);
        this.setState({loading: true})
      } else {
        if (reblogId) formData.append('reblog[id]', reblogId)
        formData.append('reblog[quest_id]', this.state.questId);
        formData.append('reblog[text]', this.state.reblogText);
      }
      this.props.questSubmitAction(formData).then((data) => {
        const taggableId = this.props.model === 'Quest' ?
          data.quest.id :
          data.reblog.id;
        const tags = that.state.tags;
        const existingTags = that.props.task === 'edit' ?
          that.props.quest.tag_joins.map(tag_join => tag_join.tag.tag_name) :
          [];
        if (tags) {
          for (let x = 0; x < tags.length; x++) {
            let tagExists = false;
            const inputTag = tags[x];
            const newTag = inputTag[0] === '#' ? inputTag.slice(1) : inputTag;
            if (existingTags.includes(newTag)) continue;
            for (let y = 0; y < that.props.tags.length; y++) {
              let existingTag = that.props.tags[y];
              if (existingTag.tag_name === newTag) {
                const tagJoinForm = new FormData();
                tagJoinForm.append('tag_join[taggable_id]', taggableId);
                tagJoinForm.append('tag_join[taggable_type]', this.props.model);
                tagJoinForm.append('tag_join[tag_id]', existingTag.id);
                const order = x + 1;
                tagJoinForm.append('tag_join[order]', order);
                this.props.addTagAction(tagJoinForm);
                tagExists = true;
                break;
              }
            }
            if (!tagExists) {
              const tagFormData = new FormData();
              tagFormData.append('tag[tag_name]', newTag);
              this.props
                .createTag(tagFormData)
                .then((tagData) => {
                  const createdTagId = tagData.tag.id;
                  const tagJoinForm = new FormData();
                  tagJoinForm.append('tag_join[taggable_id]', taggableId);
                  tagJoinForm.append('tag_join[taggable_type]', this.props.model);
                  tagJoinForm.append('tag_join[tag_id]', createdTagId);
                  const order = x + 1;
                  tagJoinForm.append('tag_join[order]', order);
                  this.props.addTagAction(tagJoinForm);
                })
            }
          }
        }
        // that.setState({})
        that.props.closeModal();
      });
    }
  }

  render() {
    const { closeModal, currentUser, type, task, reblogAction, model, quest, reblog } = this.props;
    const { title, text, reblogText, imageFiles } = this.state;
    let placeholderText;
    switch (type) {
      case 'text':
        placeholderText = 'Go ahead, put anything';
        break;
      case 'image':
        placeholderText = 'Add a caption';
        break;
      case 'quote':
        placeholderText = ' - Source';
        break;
      case 'audio':
        placeholderText = 'Add a description';
        break;
      case 'video':
        placeholderText = 'Add a caption';
        break;
      default:
        placeholderText = '';
        break;
    }

    const titleSection = model === 'Quest' ? 
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="input-title"
        onChange={this.handleInput('title')}
      /> :
      <div className="old-quest-title">{title}</div>
    ;

    const oldImagePreviews = this.state.oldImageUrls
      ? this.state.oldImageUrls.map((imageUrl, idx) => {
        switch (type) {
          case 'image':
            return (
              <div key={`old-img-${idx}`} className="image-preview-box">
                <img className="image-preview" src={imageUrl} />
              </div>
            );
          case 'video':
            return (
              <div key={`old-vid-${idx}`} className="image-preview-box">
                <video controls className="image-preview" src={imageUrl} />
              </div>
            )
          case 'audio':
            return (
              <div key={`old-aud-${idx}`} className="image-preview-box">
                <audio controls src={imageUrl}>
                  Your browser does not support this player
                </audio>
              </div>
            );
          default:
            return null;
        }
      })
      : null;
    
    const newImagePreviews = this.state.imageUrls
      ? this.state.imageUrls.map((imageUrl, idx) => {
        return (
          <div key={`new-img-${idx}`} className="image-preview-box">
            <img className="image-preview" src={imageUrl} />
            <div className="delete-preview-container">
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          </div>
        );
      })
      : null;
    
    const imagePreviews = oldImagePreviews ?
      oldImagePreviews.concat(newImagePreviews) :
      newImagePreviews;
    
    // useful for the rest of the uploads
    const prevImages = this.state.imageFiles !== null
      || this.state.oldImageUrls !== null;
    const uploadSize = prevImages ? 36 : 196;

    const imageLabel = prevImages ? 'Add more photos' : 'Upload Photos!';
    const imageUploadSection = (
      <div className="image-upload-box">
        {imagePreviews}
        {model === 'Quest' && <label htmlFor="upload-box" className="upload-label-box">
          <div
            className={`camera-icon-text-container ${prevImages ? 'invert' : ''}`}
            style={{ height: uploadSize }}
          >
            <div className="camera-icon fas fa-camera" />
            <div className="image-label">{imageLabel}</div>
          </div>
          <input
            type="file"
            accept="image/*"
            id="upload-box"
            value=""
            onChange={this.handleUpload}
            multiple
          />
        </label>}
      </div>
    );
    // UPDATE VIDEO AND AUDIO WITH CASES
    const newVideoPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map((imageUrl, idx) => {
        return (
          <div key={idx} className="image-preview-box">
            <video controls className="image-preview" src={imageUrl} />
            <div className="delete-preview-container">
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          </div>
        );
      })
      : null;
    
    const videoPreviews = oldImagePreviews ?
      oldImagePreviews.concat(newVideoPreviews) :
      newVideoPreviews;

    const videoLabel = this.state.imageFiles !== null
      || this.state.oldImageUrls !== null
      ? 'Add more videos' : 'Upload Video!';
    // const videoLabel = 'Upload Video!';
    const videoUploadSection = (
      <div className="image-upload-box">
        {videoPreviews}
        {model === 'Quest' && <label htmlFor="upload-box" className="upload-label-box">
          <div
            className={`camera-icon-text-container ${prevImages ? 'invert' : ''}`}
            style={{ height: uploadSize }}
          >
            <div className="camera-icon fas fa-video" />
            <div className='image-label'>{videoLabel}</div>
          </div>
          <input
            type="file"
            accept="video/*"
            id="upload-box"
            onChange={this.handleUpload}
          />
        </label>}
      </div>
    );

    const newAudioPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map((imageUrl, idx) => {
        return (
          <div key={idx} className="image-preview-box">
            <audio controls src={imageUrl}>
              Your browser does not support this player
            </audio>
            <div className="delete-preview-container">
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          </div>
        );
      })
      : null;
    
    const audioPreviews = oldImagePreviews ?
      oldImagePreviews.concat(newAudioPreviews) :
      newAudioPreviews;

    const audioLabel = this.state.imageFiles !== null || this.state.oldImageUrls !== null ? 'Add more music' : 'Upload Music!';
    // const audioLabel = 'Upload Music!';
    const audioUploadSection = (
      <div className="image-upload-box">
        {audioPreviews}
        {model === 'Quest' && <label htmlFor="upload-box" className="upload-label-box">
          <div
            className={`camera-icon-text-container ${prevImages ?'invert': ''}`}
            style={{ height: uploadSize }}
          >
            <div className="camera-icon fas fa-headphones" />
            <div className="image-label">{audioLabel}</div>
          </div>
          <input
            type="file"
            accept="audio/*"
            id="upload-box"
            onChange={this.handleUpload}
          />
        </label >}
      </div>
    );

    const quoteSection = (
      <input
        type="text"
        placeholder='"Quote"'
        className="input-quote"
        onChange={this.handleInput('title')}
      />
    );

    // What the fuck is the purpose of this
    // const textSection = (imageFiles || this.state.oldImageUrls)
    //   && !['text', 'quote'].includes(type)
    //   ? (
    //   <textarea
    //     value={text}
    //     placeholder={placeholderText}
    //     className="input-body"
    //     // elastic="false"
    //     onChange={this.handleInput('text')}
    //   ></textarea>
    //   ) : (
    //     <textarea
    //     value={text}
    //     placeholder={placeholderText}
    //     className="input-body"
    //     // elastic="false"
    //     onChange={this.handleInput('text')}
    //   ></textarea>
    // );
    const textSection = reblogAction
      ? (
        <div
          className="old-text-area"
          // elastic="false"
        >
          <div className="old-text-area-content">{text}</div>
        </div>
      ) : (
        <textarea
          value={text}
          placeholder={placeholderText}
          className="input-body"
          // elastic="false"
          onChange={this.handleInput('text')}
        ></textarea>
    );
    
    const reblogTextSection = model === 'Reblog' ? (
      <textarea
        value={reblogText}
        placeholder={placeholderText}
        className="input-body"
        // elastic="false"
        onChange={this.handleInput('reblogText')}
      ></textarea>
    ) : null;

    const tagSection = (
      <div
        className="tag-section"
        onClick={() => {
          document.getElementById('tagInput').focus();
          return false;
        }}
      >
        {this.state.tags.map((tag,idx) => {
          return (
            <div
              onClick={(e) => this.deleteTag(e)}
              key={idx}
              className="enteredTag"
            >{`#${tag}`}</div>
          )
        })}
        <input
          id="tagInput"
          type="text"
          placeholder="#add tags"
          className="tag-input-body"
          elastic="true"
          onChange={this.handleInput('tags')}
          onKeyDown={(e) => this.createTag(e)}
        ></input>
      </div>
    );

    let formBlock;
    switch (this.state.type) {
      case 'text':
        formBlock = (
          <div className="formData">
            {model === 'Reblog' ?
              <div className="old-quest-data">
                <div className="old-quest-data-header">
                  <img className="old-quest-avatar" src={quest.authorAvatar} />
                  <div className="old-quest-username">{quest.author.username}</div>
                </div>
                {titleSection}
                {textSection}
              </div> :
              <>
                {titleSection}
                {textSection}
              </>}
            {reblogTextSection}
            {tagSection}
          </div>
        );
        break;
      case 'image':
        formBlock = (
          <div className="formData">
            {model === 'Reblog' ?
              <div className="old-quest-data">
                {imageUploadSection}
                {textSection}
              </div> :
              <>
                {imageUploadSection}
                {textSection}
              </>}
            {reblogTextSection}
            {tagSection}
          </div>
        );
        break;
      case 'quote':
        formBlock = (
          <div className="formData">
             {model === 'Reblog' ?
              <div className="old-quest-data">
                {quoteSection}
                {textSection}
              </div> :
              <>
                {quoteSection}
                {textSection}
              </>}
            {reblogTextSection}
            {tagSection}
          </div>
        );
        break;
      case 'audio':
        formBlock = (
          <div className="formData">
            {model === 'Reblog' ?
              <div className="old-quest-data">
                {audioUploadSection}
                {textSection}
              </div> :
              <>
                {audioUploadSection}
                {textSection}
              </>}
            {reblogTextSection}
            {tagSection}
          </div>
        );
        break;
      case 'video':
        formBlock = (
          <div className="formData">
            {model === 'Reblog' ?
              <div className="old-quest-data">
                {videoUploadSection}
                {textSection}
              </div> :
              <>
                {videoUploadSection}
                {textSection}
              </>}
            {reblogTextSection}
            {tagSection}
          </div>
        );
        break;
    }

    let disabled = true;
    if (title !== '' || text !== '' || imageFiles !== null || this.state.allowSubmit) {
      disabled = false;
    }

    let submitText;
    if (task === 'edit') submitText = 'Update'
    else if (model === 'Reblog') submitText = 'Reblog'
    else submitText = 'Create';

    return (
      <>
        {this.state.loading && <Loading />}
        {/* <img className="avatar-dash" src={currentUser.avatar} /> */}
        <div className="quest-form-box quest-box">
          <div className="quest-form-top-block">
            <div className="current-username">{currentUser.username}</div>
            {model === 'Reblog' &&
            <>
              <i className="fas fa-retweet"></i>
              <div className="old-author">{quest.author.username}</div>
            </>
            }
          </div>
          {formBlock}
          <div className="quest-form-bottom-block">
            <button className="quest-close" onClick={closeModal}>
              Close
            </button>
            <button
              disabled={disabled}
              className="quest-create"
              onClick={this.handleSubmit}
            >
              {submitText}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NewQuestForm;