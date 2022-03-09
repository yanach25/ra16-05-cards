import PropTypes from 'prop-types';

function Card(props) {
    if (!props) {
        return null;
    }

    const {img, title, content, ok, okTitle} = props;
    const imgEl = img ? <img src={img} className="card-img-top" alt={img} /> : null;
    let contentContainer = null;

    if (title || content || ok) {
        const titleEl = title ? <h5 className="card-title">{title}</h5> : null;
        const contentEl = content ? <p className="card-text">{content}</p> : null;
        const okBtn = ok ? <a href={ok} className="btn btn-primary">{okTitle}</a> : null;

        contentContainer = <div className="card-body">
            {titleEl}
            {contentEl}
            {okBtn}
        </div>
    }

    return (
        <div className="card" style={{width: '18rem'}}>
            {imgEl}
            {contentContainer}
        </div>
    )
}

Card.defaultProps = {
    okTitle: 'Go somewhere',
}

Card.prototype = {
    img: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    ok: PropTypes.string,
}

export default Card;
