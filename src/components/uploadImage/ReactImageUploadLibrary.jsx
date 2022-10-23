import React from 'react';
import ImageUploading from 'react-images-uploading';

export function ReactImageUploadLibrary() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button
                            onClick={onImageUpload}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default ReactImageUploadLibrary