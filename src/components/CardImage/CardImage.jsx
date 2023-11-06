import "./CardImage.css"

const CardImage = ({image, altDescription, url}) => {
    const openImage = (url) => window.open(url);

    return (
        <article onClick={() => openImage(url)}>
            <img src={image} />
            <p>{altDescription}</p>
        </article>
    );
};

export default CardImage;
