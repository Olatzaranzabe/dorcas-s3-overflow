import React, { Component, Fragment } from 'react';
import martirioPic from '../images/martirio.jpg';
import Skills from './Skills.js';
import Socialmedia from './Socialmedia.js';

class Preview extends Component {
    render() {
        return (
            <div class="preview-container">
                <div class="margin-preview">
                    <div class="button-reset__container">
                        <a class="button-reset__link button-reset__title" href="#">
                            <i class=" far fa-trash-alt icono-basura">RESET</i>
                        </a>
                    </div>
                    <div class="preview">
                        <div class="preview_title">
                            <div class="preview-title__container">
                                <div class="color-line"></div>
                                <div class="container-name-profesion">
                                    <p class="name_line local--name" id="element-nombre">Martirio</p>
                                    <p class="profesion_line local--job" id="element-puesto">Reina de la canción</p>
                                </div>
                            </div>
                        </div>
                        <div class="photo-container">
                            <img class="changeImagePreview local--photo" src={martirioPic} alt="" />
                        </div>
                        <div class="footer-preview__container">
                            <div class="logos-container">
                                <a class="boton-red-social tfn_button phone_button local--phone" id="element-telefono" href="">
                                    <i class="fas fa-mobile-alt logo-preview logo-fono"></i>
                                </a>
                                <a class="boton-red-social email_button local--email" id="element-email" href="">
                                    <i class="far fa-envelope logo-preview logo-carta"></i>
                                </a>
                                <a class="boton-red-social linkedin_button local--linkedin" id="element-linkedin" href="">
                                    <i class="fab fa-linkedin-in logo-preview logo-in"></i>
                                </a>
                                <a class="boton-red-social github_button local--github" id="element-github" href="">
                                    <i class="fab fa-github-alt logo-preview logo-github"></i>
                                </a>
                            </div>
                            <div class="footer-preview__container">
                               <Socialmedia />
                                <div class="etiquetas-habilidades-container local local--skills">
                                    <Skills skillName='HTML' />
                                    <Skills skillName='CSS' />
                                    <Skills skillName='GULP' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preview;