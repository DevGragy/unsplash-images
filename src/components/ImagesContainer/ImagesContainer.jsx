import CardImage from "../CardImage/CardImage";
import "./ImagesContainer.css";

const ImagesContainer = ({search}) => {
    return (
        <section className="container">
            <div className="center">
                {search.map((image) => (
                    <CardImage
                        key={image.id}
                        image={image.urls.regular}
                        altDescription={image.alt_description}
                        url={image.links.html}
                    />
                ))}
            </div>
        </section>
    );
};

export default ImagesContainer;
