import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import frontEnd_Development from './frontend.png';
import backEnd_Development from './backend.png';
import UI_Design from './ui-design.png';
import Mobile_Development from './Mobile.png';
import phone_Contact from './phone-contact.png';
import contact_icon from './contact_icon.png';
import contact_Dark_mode from './contact_Dark_Mode.png';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';
import gmailIcon from './gmail-icon.png';
import githubDarkIcon from './github-dark-icon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    frontEnd_Development,
    backEnd_Development,
    UI_Design,
    Mobile_Development,
    phone_Contact,
    contact_icon,
    contact_Dark_mode,
    githubIcon,
    linkedinIcon,
    gmailIcon,
    githubDarkIcon
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'This portfolio showcases my work as a Front-End Developer, built using Next.js for seamless server-side rendering and Tailwind CSS for fast, responsive design.',
        bgImage: './portpolioWebsite.png',
        bgImageDark:'./work-5.png',
        link:'https://github.com/saurabhkhairnar10/nextjsportpolio',
        videoUrl:'/NextJsPortpolio.mp4'
    }
]

export const serviceData = [
    { icon: assets.UI_Design, title: 'FrontEnd Development', description: 'It involves creating the visual and interactive aspects of a website.', link: 'https://roadmap.sh/frontend' },
    { icon: assets.backEnd_Development, title: 'BackEnd Development', description: 'It focuses on building the DataBase Connection and Api Integration.', link: 'https://roadmap.sh/backend' },
    { icon: assets.Mobile_Development, title: 'Mobile App Development', description: 'It is process of designing, coding, and deploying software applications For Mobile Applications', link: 'https://roadmap.sh/react-native' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Working on MERN Stack Projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];