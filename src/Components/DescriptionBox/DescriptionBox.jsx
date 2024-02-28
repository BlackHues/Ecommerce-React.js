import './DescriptionBox.css'

const DescriptionBox = () => {
    return ( 
       <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce website design involves creating and launching a virtual store to sell products. We’re not talking about listing your items on a third-party online marketplace like eBay. This is your store, and you have creative control. 
                While website design isn’t the only thing customers look for, integrating it with social media marketing, digital campaigns and search engine optimization (SEO) will provide a superior user experience that increases traffic to your store.</p>
        </div>
       </div> 
     );
}
 
export default DescriptionBox;