import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoLinkedin,
	IoLogoWhatsapp,
	IoLogoInstagram,
	IoLogoPinterest,
} from "react-icons/io";

const LinksShare = [
	{
		link: "https://twitter.com/intent/tweet?url=",
		icon: IoLogoPinterest,
		color: "red",
	},
	{
		link: "https://twitter.com/intent/tweet?url=",
		icon: IoLogoTwitter,
		color: "rgb(30,130,230)",
	},
	{
		link: "https://api.whatsapp.com/send?text=",
		icon: IoLogoInstagram,
		color: "black",
	},
	{
		link: "https://m.facebook.com/sharer/sharer.php?u=",
		icon: IoLogoFacebook,
		color: "#1877f2",
	},
	{
		link: "https://api.whatsapp.com/send?text=",
		icon: IoLogoWhatsapp,
		color: "black",
	},
	{
		link: "https://www.linkedin.com/shareArticle/?mini=true&url=",
		icon: IoLogoLinkedin,
		color: "#2767b2",
	},
];

export default LinksShare;
