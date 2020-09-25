import React from 'react';

class AvatarUpload extends React.Component {
  constructor(props){
    super(props);
    const { currentUser } = this.props;
		this.state = {
			currentUser_id: currentUser.id,
			imageUrl: null,
			imageFile: null,
			errors: null,
			allowSubmit: true
		};
		this.reference = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.deletePreviewImage = this.deletePreviewImage.bind(this);
  }

  handleInput(type) {
		return (e) => {
			this.setState({ [type]: e.currentTarget.value });
		}
  }

  handleUpload(e) {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () =>
			this.setState({ imageUrl: reader.result, imageFile: file });

		if (file) {
			reader.readAsDataURL(file);
		} else {
			this.setState({ imageUrl: "", imageFile: null });
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
			imageUrl: imageUrl,
			imageFile: imageFile
		})

  }
  
  handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		if (this.state.photoFile) {
			formData.append('post[photo]', this.state.photoFile);
		}
		$.ajax({
			url: '/api/posts',
			method: 'POST',
			data: formData,
			contentType: false,
			processData: false
		});
		
	}
  


  render() {
		const { closeModal, currentUser } = this.props;
		const { imageFiles } = this.state;

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

		let disabled=true;
		if (title!="" || text!="" || imageFiles!=null) {disabled=false} else {disabled=true};

		return (
			<>
				{/* <img className="avatar-dash" src={currentUser.avatar} /> */}
				<div className="quest-form-box quest-box">
					<div className="quest-form-top-block">{currentUser.username}</div>
					{imageUploadSection}
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

export default AvatarUpload;