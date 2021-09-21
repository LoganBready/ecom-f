import React, { useState } from "react";

let imagePath = "../images/boots/boots-1.jpg";

const GetBootImage = ({ id }) => {
  const imageId = id;
  // const { item, favouritesNote } = props;

  const [image, setImage] = useState("");
  const imageGetter = (imageId) => {
    import(`../images/order/${imageId}.jpg`)
      .then((image) => {
        setImage(image.default);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  imageGetter(imageId);

  return (
    <div>{image && <img alt="" className="img-responsive" src={image} />}</div>
  );
};
export default GetBootImage;
