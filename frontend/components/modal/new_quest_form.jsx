import React from 'react';

class NewQuestForm extends React.Component {
  constructor(props){
    super(props);
    const { postType, currentUser } = this.props;
		this.state = {
			currentUser_id: currentUser.id,
			postType: postType,
			title: '',
			text: '',
			imageUrls: null,
			imageFiles: null,
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
		let that = this;
		let fileArr = [];
    let urlArr = [];
    
		if (this.state.imageFiles !== null){
			fileArr = fileArr.concat(this.state.imageFiles);
			imageUrlArr = urlArr.concat(this.state.imageUrls);
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
			let imageFiles = this.state.imageFiles;

      formData.append('post[title]', this.state.title);
			if (imageFiles) {
				imageFiles.forEach((image, idx)=>{
					formData.append('post[images][]', imageFiles[idx]);
				})
			}
			formData.append('post[text]', this.state.text);
			formData.append('post[post_type]', this.state.postType);
			
			this.props.createPost(formData)
        .then (
          this.props.closeModal() 
        );
		}
	}
  


  render() {
    
    return(
      <div>
        <p>Hello World</p>
      </div>
    )
   
  }

}

export default NewQuestForm;