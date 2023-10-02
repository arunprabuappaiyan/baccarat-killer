import './fab.css';

export default function FABComponent() {
  return (
    <>
      <div className="d-flex flex-column float-button">
        <a
          className="btn btn-light p-1 rounded-5 bg-fab"
          href="https://t.me/ReachCasinokiller"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          <i className="fa-brands fa-telegram icon-font-size m-2 color-0088CC"></i>
        </a>
        <a
          className="btn btn-light p-1 mt-1 rounded-5 bg-fab"
          href="https://wa.link/013pug"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp icon-font-size m-2 color-25D366"></i>
        </a>
        <a
          className="btn btn-light p-1 mt-1 rounded-5 bg-fab"
          href="https://www.facebook.com/Casinokiller.in"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook m-2 icon-font-size"></i>
        </a>
        <a
          className="btn btn-light p-1 mt-1 rounded-5 bg-fab"
          href="https://www.instagram.com/casinokiller.in/"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram m-2 icon-font-size"></i>
        </a>
        <a
          className="btn btn-light p-1 mt-1 rounded-5 bg-fab"
          href="https://www.youtube.com/@mailcasinokiller"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube m-2 icon-font-size"></i>
        </a>
      </div>
    </>
  );
}
