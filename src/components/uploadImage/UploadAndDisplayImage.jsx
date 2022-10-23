// allowFileTypeconst allowFileType = ["image/jpeg", "image/png"]
// const uploader = document. querySelector ("#uploader");
// const uploaderUi = document. querySelector ("#uploaderUi");
// uploaderUi.addEventListener('click',_=>uploader.click());
// uploader .addEventListener ('change' ,_=> {
//     const
//         currenFile = uploader.files[0];
//     if(allowFileType.includes (currenFile.type)){
//         console.log (currenFile)
//         const reader = new FileReader();
//         reader.readAsDataURL (currenFile);
//         reader .addEventListener ('Load' ,event => {
// // console.log(event.target)
//             uploaderUi.src = event.target.result
//             alert("not support file")
//
//
//









import React, { useState } from "react";

const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br />

            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;