import './FooterList.css';

function FooterList({ total }) {
    return(
        <div class='div-grey' id='footer-list'>
            {total} classificados
        </div>
    );
}

export default FooterList;