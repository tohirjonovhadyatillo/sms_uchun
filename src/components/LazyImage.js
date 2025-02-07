const LazyImage = ({ src, alt }) => {
    return <img src={src} alt={alt} loading="lazy" width="600" height="400" />;
  };
  
  export default LazyImage;