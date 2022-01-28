
export default function Header(props){
     const {src,alt,className}=props;
     return(
         <header >
          <img className={className} src={src} alt={alt}></img>
         </header>
     )
}