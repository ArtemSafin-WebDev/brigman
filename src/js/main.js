import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import selectTheme from './selectTheme';
import orb from './orb';
import homeTopSlider from './homeTopSlider';
import homeBottomSlider from './homeBottomSlider';
import colorSchemes from './colorSchemes';
import catalogMenuOrb from './catalogMenuOrb';
import catalogMenu from './catalogMenu';
import articleGallery from './articleGallery';
import mediaModals from './mediaModals';
import catalogSorting from './catalogSorting';
import cookies from './cookies';
import mobileSettings from './mobileSettings';
import scrollUp from './scrollUp';
import commentsReply from './commentsReply';
import modals from './modals';
import showComments from './showComments';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    selectTheme();
    orb();
    homeTopSlider();
    homeBottomSlider();
    colorSchemes();
    catalogMenuOrb();
    catalogMenu();
    articleGallery();
    mediaModals();
    catalogSorting();
    cookies();
    mobileSettings();
    scrollUp();
    commentsReply();
    modals();
    showComments();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
