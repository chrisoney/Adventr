import React from 'react';

class NewQuestForm extends React.Component {
  constructor(props) {
    super(props);
    const { type, currentUser, quest } = this.props;
    this.state = {
      currentUser_id: currentUser.id,
      id: quest ? quest.id : null,
      type: type,
      title: quest ? quest.title : '',
      text: quest ? quest.text : '',
      tags: quest ? quest.tag_joins.map(tag_join => tag_join.tag.tag_name) : [],
      oldImageUrls: quest ? quest.imageUrls : null,
      imageUrls: null,
      imageFiles: null,
      errors: null,
      allowSubmit: true,
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

  createTag(e) {
    const that = this;
    if (e.key === 'Enter' && e.target.value !== '') {
      let tag = e.target.value.toLowerCase();
      if (tag[0] === '#') tag = tag.slice(1);
      if (this.state.tags.indexOf(tag) === -1) {
        this.setState({ tags: this.state.tags.concat([tag]) });
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
        this.props.quest.tag_joins.forEach((tag_join) => {
          if (tag_join.tag.tag_name === tagToDelete) {
            that.props.removeTagFromQuest(tag_join.id)
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
    const that = this;
    const tagInput = document.getElementById('tagInput');
    if (tagInput.value !== '') {
      const tag = [tagInput.value];
      this.setState({ tags: this.state.tags.concat(tag) });
      // console.log(tagInput);
      const newDiv = document.createElement('div');
      newDiv.classList.add('enteredTag');
      newDiv.innerHTML = `#${tagInput.value}`;
      tagInput.parentElement.insertBefore(newDiv, tagInput);
      tagInput.value = null;
    }
    if (this.state.allowSubmit) {
      e.preventDefault();
      this.setState({ allowSubmit: false });
      const formData = new FormData();
      // changed
      const imageFiles = this.state.imageFiles;
      const id = this.state.id;
      if (id) formData.append('quest[id]', id)
      formData.append('quest[title]', this.state.title);
      console.log(imageFiles)
      if (imageFiles) {
        imageFiles.forEach((image, idx) => {
          formData.append('quest[images][]', imageFiles[idx]);
        });
      }
      formData.append('quest[text]', this.state.text);
      formData.append('quest[quest_type]', this.state.type);

      this.props.questSubmitAction(formData).then((questData) => {
        const questId = questData.quest.id;
        const tags = that.state.tags;
        const existingTags = that.props.quest.tag_joins
          .map(tag_join => tag_join.tag.tag_name);
        if (tags) {
          for (let x = 0; x < tags.length; x++) {
            let tagExists = false;
            const inputTag = tags[x];
            const newTag = inputTag[0] === '#' ? inputTag.slice(1) : inputTag;
            if (existingTags.includes(newTag)) continue;
            for (let y = 0; y < that.props.tags.length; y++) {
              let existingTag = that.props.tags[y];
              if (existingTag.tag_name === newTag) {
                const questTagForm = new FormData();
                questTagForm.append('tag_join[taggable_id]', questId);
                questTagForm.append('tag_join[taggable_type]', 'Quest');
                questTagForm.append('tag_join[tag_id]', existingTag.id);
                const order = x + 1;
                questTagForm.append('tag_join[order]', order);
                this.props.addTagToQuest(questTagForm);
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
                  const questTagForm = new FormData();
                  questTagForm.append('tag_join[taggable_id]', questId);
                  questTagForm.append('tag_join[taggable_type]', 'Quest');
                  questTagForm.append('tag_join[tag_id]', createdTagId);
                  const order = x + 1;
                  questTagForm.append('tag_join[order]', order);
                  this.props.addTagToQuest(questTagForm);
                })
            }
          }
        }
        this.props.closeModal();
      });
    }
  }

  render() {
    const { closeModal, currentUser, type } = this.props;
    const { title, text, imageFiles } = this.state;
    let placeholderText;

    switch (type) {
      case 'text':
        placeholderText = 'Your text here';
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

    const titleSection = (
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="input-title"
        onChange={this.handleInput('title')}
      />
    );

    const oldImagePreviews = this.state.oldImageUrls
      ? this.state.oldImageUrls.map((imageUrl, idx) => {
          return (
            <div key={`old-img-${idx}`} className="image-preview-box">
              <img className="image-preview" src={imageUrl} />
            </div>
          );
        })
      : null;
    
    const newImagePreviews = this.state.imageUrls
      ? this.state.imageUrls.map((imageUrl, idx) => {
          return (
            <div key={`new-img-${idx}`} className="image-preview-box">
              <img className="image-preview" src={imageUrl} />
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          );
        })
      : null;
    
    const imagePreviews = oldImagePreviews ?
      oldImagePreviews.concat(newImagePreviews) :
      newImagePreviews;

    const imageLabel =
      this.state.imageFiles !== null || this.state.oldImagesFiles !== null ? 'Add more photos' : 'Upload Photos!';
    const imageUploadSection = (
      <div className="image-upload-box">
        {imagePreviews}
        <label htmlFor="upload-box" className="upload-label-box">
          <div className="camera-icon-text-container">
            <div className="camera-icon fas fa-camera" />
            <div>{imageLabel}</div>
          </div>
          <input
            type="file"
            accept="image/*"
            id="upload-box"
            value=""
            onChange={this.handleUpload}
            multiple
          />
        </label>
      </div>
    );

    const videoPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map((imageUrl, idx) => {
          return (
            <div key={idx} className="image-preview-box">
              <video controls className="image-preview" src={imageUrl} />
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          );
        })
      : null;

    const videoLabel = 'Upload Video!';
    const videoUploadSection = (
      <div className="image-upload-box">
        {videoPreviews}
        <label htmlFor="upload-box" className="upload-label-box">
          <div className="camera-icon-text-container">
            <div className="camera-icon fas fa-video" />
            <div>{videoLabel}</div>
          </div>
          <input
            type="file"
            accept="video/*"
            id="upload-box"
            onChange={this.handleUpload}
          />
        </label>
      </div>
    );

    const audioPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map((imageUrl, idx) => {
          return (
            <div key={idx} className="image-preview-box">
              <audio controls src={imageUrl}>
                Your browser does not support this player
              </audio>
              <i
                className="fas fa-times-circle delete-preview"
                onClick={() => this.deletePreviewImage({ idx })}
              ></i>
            </div>
          );
        })
      : null;

    const audioLabel = 'Upload Music!';
    const audioUploadSection = (
      <div className="image-upload-box">
        {audioPreviews}
        <label htmlFor="upload-box" className="upload-label-box">
          <div className="camera-icon-text-container">
            <div className="camera-icon fas fa-headphones" />
            <div>{audioLabel}</div>
          </div>
          <input
            type="file"
            accept="audio/*"
            id="upload-box"
            onChange={this.handleUpload}
          />
        </label>
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

    const textSection = (
      <textarea
        cols="30"
        rows="4"
        value={text}
        placeholder={placeholderText}
        className="input-body"
        elastic="true"
        onChange={this.handleInput('text')}
      ></textarea>
    );

    const tagSection = (
      <div
        className="tag-section"
        onClick={() => {
          document.getElementById('tagInput').focus();
          return false;
        }}
      >
        {this.state.tags.map((tag,idx) => {
          return <div key={idx} className="enteredTag">{`#${tag}`}</div>
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
            {titleSection}
            {textSection}
            {tagSection}
          </div>
        );
        break;
      case 'image':
        formBlock = (
          <div className="formData">
            {imageUploadSection}
            {textSection}
            {tagSection}
          </div>
        );
        break;
      case 'quote':
        formBlock = (
          <div className="formData">
            {quoteSection}
            {textSection}
            {tagSection}
          </div>
        );
        break;
      case 'audio':
        formBlock = (
          <div className="formData">
            {audioUploadSection}
            {textSection}
            {tagSection}
          </div>
        );
        break;
      case 'video':
        formBlock = (
          <div className="formData">
            {videoUploadSection}
            {textSection}
            {tagSection}
          </div>
        );
        break;
    }

    let disabled = true;
    if (title !== '' || text !== '' || imageFiles !== null) {
      disabled = false;
    } else {
      disabled = true;
    }

    return (
      <>
        {/* <img className="avatar-dash" src={currentUser.avatar} /> */}
        <div className="quest-form-box quest-box">
          <div className="quest-form-top-block">{currentUser.username}</div>
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
              <span>Create</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NewQuestForm;