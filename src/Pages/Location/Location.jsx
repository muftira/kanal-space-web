import React, {Component} from 'react';
import './Location.css';
import { Icon } from '@iconify/react';
import whatsappFill from '@iconify/icons-akar-icons/whatsapp-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';

class Location extends Component {
    render() {
        return(
            <div className="main-container">
                    <div className="box-kiri">
                            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.268145342043!2d107.62902431512858!3d-6.858430995043646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a8353a91af%3A0x9020d381c8ba0354!2sKanal%20Space!5e0!3m2!1sid!2sid!4v1633600243609!5m2!1sid!2sid" width='720px' height='640px' frameborder="0"></iframe> 
                    </div>
                    <div className="box-kanan">
                        <div className="text-location">                 
                            <p className="tsatu">Kanal Space</p>
                            <p className="tdua"> Jl. Pakar Barat. No.8, Ciburial, Kec. Cimenyan,</p>
                            <div className="ttiga"> Bandung, Jawa Barat 40198</div>
                            
                            <div className="social-media">
                                <a className='sosSatu' href="https://www.instagram.com/" target='_blank'><Icon icon={instagramFill}  /></a> 
                                <a  className='sosDua' href="https://web.whatsapp.com/" target='_blank'><Icon icon={whatsappFill}  /></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Location ;