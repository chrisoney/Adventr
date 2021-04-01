import React from 'react';
import { fetchAllTags } from '../../actions/tag_actions';

class NewQuestForm extends React.Component {
  constructor(props){
    super(props);
    const { type, currentUser } = this.props;
    this.state = {
      currentUser_id: currentUser.id,
      type: type,
      title: '',
			text: '',
			tags: null,
      imageUrls: null,
      imageFiles: null,
      errors: null,
      allowSubmit: true,
    };
    // this.reference = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.deletePreviewImage = this.deletePreviewImage.bind(this);
	}
	
	componentDidMount() {
		this.props.fetchAllTags();
	}

  handleInput(type) {
		return (e) => {
			this.setState({ [type]: e.currentTarget.value });
		}
  }

  handleUpload(e) {
		let that = this;
		let fileArr = [];
    let urlArr = [];
    
		if (this.state.imageFiles !== null){
			fileArr = fileArr.concat(this.state.imageFiles);
			urlArr = urlArr.concat(this.state.imageUrls);
    }
    
    let uploadedImages = e.currentTarget.files;
    
		for (let i = 0; i < uploadedImages.length; i++){
			let file = uploadedImages[i];
			let fileReader = new FileReader();
	
			fileReader.onloadend = () => {
        fileArr = fileArr.concat(file);
        urlArr = urlArr.concat(fileReader.result);
        that.setState({
          imageFiles: fileArr,
          imageUrls: urlArr
				})
			}
			if (file) fileReader.readAsDataURL(file);
		}

  }
  
  deletePreviewImage(idx){
		let index = idx.idx;
		
		let imageUrls = this.state.imageUrls.slice();
		let imageFiles = this.state.imageFiles.slice();
		
		imageUrls.splice(index,1);
		imageFiles.splice(index,1);
		
		if (imageUrls && imageUrls.length===0) imageUrls = null;
		if (imageFiles && imageFiles.length===0) imageFiles = null;

		this.setState({
			imageUrls: imageUrls,
			imageFiles: imageFiles
		})

  }
  
  handleSubmit(e) {
		
		if (this.state.allowSubmit) {

      e.preventDefault();
      this.setState({ allowSubmit: false });
			const formData = new FormData();
			// changed
			const imageFiles = this.state.imageFiles;
			const tags = this.state.tags;

      formData.append('quest[title]', this.state.title);
			if (imageFiles) {
				imageFiles.forEach((image, idx)=>{
					formData.append('quest[images][]', imageFiles[idx]);
				})
			}
			// if (tags) {
			// 	tags.forEach((tag, idx) => {
			// 		const newTag = tag[0] === '#' ? tag.slice(1) : tag
			// 		for (let i = 0; i < this.props.tags; i++){
			// 			let existingTag = this.props.tags[i];
			// 			if (existingTag.tag_name === newTag) {
			// 				formData.append('quest[tags][]', existingTag);
			// 				break;
			// 			}
			// 		}
			// 		const tagFormData = new FormData();
			// 		tagFormData.append('tag[tag_name]', newTag);
			// 		this.props.createTag(tagFormData)
			// 	})
			// }
			formData.append('quest[text]', this.state.text);
			formData.append('quest[quest_type]', this.state.type);
			
			this.props.createQuest(formData)
        .then (
          this.props.closeModal() 
        );
		}
	}
  


  render() {
		const { closeModal, currentUser, type } = this.props;
		const { title, text, imageFiles } = this.state;
		let placeholderText;

		switch (type) {
			case "text":
				placeholderText = "Your text here";
				break;
			case "image":
				placeholderText = "Add a caption";
				break;
			case "quote":
				placeholderText = " - Source";
				break;
			case "audio":
				placeholderText = "Add a description";
				break;
			case "video":
				placeholderText = "Add a caption"
				break;
			default:
				placeholderText = "";
				break;
		}

			const titleSection=(
			<input 
				type="text" 
				placeholder="Title"
				className="input-title"
				onChange={this.handleInput("title")} />);

			const imagePreviews = this.state.imageUrls ?
			( this.state.imageUrls.map((imageUrl, idx)=>{
				return (<div key={idx} className="image-preview-box">
					<img className="image-preview" src={imageUrl} />
					<i className="fas fa-times-circle delete-preview"
						onClick={()=>this.deletePreviewImage({idx})}></i>
					</div>)
				})
			) : null;

			const imageLabel = (this.state.imageFiles != null) ? ("Add more photos") : ("Upload Photos!")
			const imageUploadSection = (
				<div className="image-upload-box">
					{imagePreviews}
					<label 
					htmlFor="upload-box"
					className="upload-label-box">
						<div className="camera-icon-text-container">
							<div className="camera-icon fas fa-camera" />
							<div>{imageLabel}</div>
						</div>
						<input
						type="file"
						accept="image/*"
						id="upload-box"
						onChange={this.handleUpload}
						multiple/>
					</label>
				</div>
			)

			const videoPreviews = this.state.imageUrls ? 	// if
			( this.state.imageUrls.map((imageUrl, idx)=>{
				return (<div key={idx} className="image-preview-box">
					<video controls className="image-preview" src={imageUrl} />
					<i className="fas fa-times-circle delete-preview"
						onClick={()=>this.deletePreviewImage({idx})}></i>
					</div>)
				})
			) :	null;

			const videoLabel = "Upload Video!";
			const videoUploadSection=(
				<div className="image-upload-box">
					{videoPreviews}
					<label 
					htmlFor="upload-box"
					className="upload-label-box">
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
			)

			const audioPreviews = this.state.imageUrls ? 	// if
			( this.state.imageUrls.map((imageUrl, idx)=>{
				return (<div key={idx} className="image-preview-box">
					<audio
						controls
						src={imageUrl}>Your browser does not support this player</audio>
					<i className="fas fa-times-circle delete-preview"
						onClick={()=>this.deletePreviewImage({idx})}></i>
					</div>)
				})
			) :	null;

			const audioLabel = "Upload Music!";
			const audioUploadSection=(
				<div className="image-upload-box">
					{audioPreviews}
					<label 
					htmlFor="upload-box"
					className="upload-label-box">
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
			)

			
			const textSection=(
				<textarea cols="30" rows="4" 
				placeholder={placeholderText}
				className="input-body"
				elastic="true"
				onChange={this.handleInput("text")}></textarea>
			)

			const quoteSection=(
				<input 
				type="text" 
				placeholder="&quot;Quote&quot;"
				className="input-quote"
				onChange={this.handleInput("title")}/>
			)

		let formBlock;
		switch (this.state.type) {
			case 'text':
				formBlock = (
					<div className = "formData">
						{titleSection}
						{textSection}
					</div>
				);
				break;
			case 'image':
				formBlock = (
					<div className = "formData">
						{imageUploadSection}
						{textSection}
					</div>
				);
				break;
			case 'quote':
				formBlock = (
					<div className = "formData">
						{quoteSection}
						{textSection}
					</div>
				);
				break;
			case 'audio':
				formBlock = (
					<div className = "formData">
						{audioUploadSection}
						{textSection}
					</div>
				);
				break;
			case 'video':
				formBlock = (
					<div className = "formData">
						{videoUploadSection}
						{textSection}
					</div>
				);
				break;
		}
		
		let disabled=true;
		if (title!="" || text!="" || imageFiles!=null) {disabled=false} else {disabled=true};

		return (
			<>
				{/* <img className="avatar-dash" src={currentUser.avatar} /> */}
				<div className="quest-form-box quest-box">
					<div className="quest-form-top-block">{currentUser.username}</div>
					{formBlock}
					<div className="quest-form-bottom-block">
						<button className="quest-close" onClick={closeModal}>Close</button>
						<button disabled={disabled} className="quest-create" onClick={this.handleSubmit}>
							<span>Create</span>
						</button>
					</div>
				</div>
			</>
		);
	}

}

export default NewQuestForm;