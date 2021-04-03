
class Template {
    constructor(subject, content) {
        this.subject = subject;
        this.content = content;
    }

    getTemplate() {
        return '<!doctype html>'+
        '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">'+
        '    <head>'+
        '        <meta charset="UTF-8">'+
        '        <meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '        <meta name="viewport" content="width=device-width, initial-scale=1">'+
        `        <title>${this.subject}</title>`+
        '        '+
        '    <style type="text/css">'+
        '		p{'+
        '			margin:10px 0;'+
        '			padding:0;'+
        '		}'+
        '		table{'+
        '			border-collapse:collapse;'+
        '		}'+
        '		h1,h2,h3,h4,h5,h6{'+
        '			display:block;'+
        '			margin:0;'+
        '			padding:0;'+
        '		}'+
        '		img,a img{'+
        '			border:0;'+
        '			height:auto;'+
        '			outline:none;'+
        '			text-decoration:none;'+
        '		}'+
        '		body,#bodyTable,#bodyCell{'+
        '			height:100%;'+
        '			margin:0;'+
        '			padding:0;'+
        '			width:100%;'+
        '		}'+
        '		.mcnPreviewText{'+
        '			display:none !important;'+
        '		}'+
        '		#outlook a{'+
        '			padding:0;'+
        '		}'+
        '		img{'+
        '			-ms-interpolation-mode:bicubic;'+
        '		}'+
        '		table{'+
        '			mso-table-lspace:0pt;'+
        '			mso-table-rspace:0pt;'+
        '		}'+
        '		.ReadMsgBody{'+
        '			width:100%;'+
        '		}'+
        '		.ExternalClass{'+
        '			width:100%;'+
        '		}'+
        '		p,a,li,td,blockquote{'+
        '			mso-line-height-rule:exactly;'+
        '		}'+
        '		a[href^=tel],a[href^=sms]{'+
        '			color:inherit;'+
        '			cursor:default;'+
        '			text-decoration:none;'+
        '		}'+
        '		p,a,li,td,body,table,blockquote{'+
        '			-ms-text-size-adjust:100%;'+
        '			-webkit-text-size-adjust:100%;'+
        '		}'+
        '		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{'+
        '			line-height:100%;'+
        '		}'+
        '		a[x-apple-data-detectors]{'+
        '			color:inherit !important;'+
        '			text-decoration:none !important;'+
        '			font-size:inherit !important;'+
        '			font-family:inherit !important;'+
        '			font-weight:inherit !important;'+
        '			line-height:inherit !important;'+
        '		}'+
        '		.templateContainer{'+
        '			max-width:600px !important;'+
        '		}'+
        '		a.mcnButton{'+
        '			display:block;'+
        '		}'+
        '		.mcnImage,.mcnRetinaImage{'+
        '			vertical-align:bottom;'+
        '		}'+
        '		.mcnTextContent{'+
        '			word-break:break-word;'+
        '		}'+
        '		.mcnTextContent img{'+
        '			height:auto !important;'+
        '		}'+
        '		.mcnDividerBlock{'+
        '			table-layout:fixed !important;'+
        '		}'+
        '		h1{'+
        '			/*@editable*/color:#222222;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:40px;'+
        '			/*@editable*/font-style:normal;'+
        '			/*@editable*/font-weight:bold;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/letter-spacing:normal;'+
        '			/*@editable*/text-align:center;'+
        '		}'+
        '		h2{'+
        '			/*@editable*/color:#222222;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:34px;'+
        '			/*@editable*/font-style:normal;'+
        '			/*@editable*/font-weight:bold;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/letter-spacing:normal;'+
        '			/*@editable*/text-align:left;'+
        '		}'+
        '		h3{'+
        '			/*@editable*/color:#444444;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:22px;'+
        '			/*@editable*/font-style:normal;'+
        '			/*@editable*/font-weight:bold;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/letter-spacing:normal;'+
        '			/*@editable*/text-align:left;'+
        '		}'+
        '		h4{'+
        '			/*@editable*/color:#949494;'+
        '			/*@editable*/font-family:Georgia;'+
        '			/*@editable*/font-size:20px;'+
        '			/*@editable*/font-style:italic;'+
        '			/*@editable*/font-weight:normal;'+
        '			/*@editable*/line-height:125%;'+
        '			/*@editable*/letter-spacing:normal;'+
        '			/*@editable*/text-align:left;'+
        '		}'+
        '		#templateHeader{'+
        '			/*@editable*/background-color:#004763;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:25px;'+
        '			/*@editable*/padding-bottom:25px;'+
        '		}'+
        '		.headerContainer{'+
        '			/*@editable*/background-color:transparent;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:0;'+
        '			/*@editable*/padding-bottom:0;'+
        '		}'+
        '		.headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{'+
        '			/*@editable*/color:#757575;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:16px;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/text-align:left;'+
        '		}'+
        '		.headerContainer .mcnTextContent a,.headerContainer .mcnTextContent p a{'+
        '			/*@editable*/color:#007C89;'+
        '			/*@editable*/font-weight:normal;'+
        '			/*@editable*/text-decoration:underline;'+
        '		}'+
        '		#templateBody{'+
        '			/*@editable*/background-color:#fdfdfd;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:0px;'+
        '			/*@editable*/padding-bottom:0px;'+
        '		}'+
        '		.bodyContainer{'+
        '			/*@editable*/background-color:transparent;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:0;'+
        '			/*@editable*/padding-bottom:0;'+
        '		}'+
        '		.bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{'+
        '			/*@editable*/color:#757575;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:16px;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/text-align:left;'+
        '		}'+
        '		.bodyContainer .mcnTextContent a,.bodyContainer .mcnTextContent p a{'+
        '			/*@editable*/color:#007C89;'+
        '			/*@editable*/font-weight:normal;'+
        '			/*@editable*/text-decoration:underline;'+
        '		}'+
        '		#templateFooter{'+
        '			/*@editable*/background-color:#004763;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:5px;'+
        '			/*@editable*/padding-bottom:5px;'+
        '		}'+
        '		.footerContainer{'+
        '			/*@editable*/background-color:transparent;'+
        '			/*@editable*/background-image:none;'+
        '			/*@editable*/background-repeat:no-repeat;'+
        '			/*@editable*/background-position:center;'+
        '			/*@editable*/background-size:cover;'+
        '			/*@editable*/border-top:0;'+
        '			/*@editable*/border-bottom:0;'+
        '			/*@editable*/padding-top:0;'+
        '			/*@editable*/padding-bottom:0;'+
        '		}'+
        '		.footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{'+
        '			/*@editable*/color:#FFFFFF;'+
        '			/*@editable*/font-family:Helvetica;'+
        '			/*@editable*/font-size:12px;'+
        '			/*@editable*/line-height:150%;'+
        '			/*@editable*/text-align:center;'+
        '		}'+
        '		.footerContainer .mcnTextContent a,.footerContainer .mcnTextContent p a{'+
        '			/*@editable*/color:#FFFFFF;'+
        '			/*@editable*/font-weight:normal;'+
        '			/*@editable*/text-decoration:underline;'+
        '		}'+
        '	@media only screen and (min-width:768px){'+
        '		.templateContainer{'+
        '			width:600px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		body,table,td,p,a,li,blockquote{'+
        '			-webkit-text-size-adjust:none !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		body{'+
        '			width:100% !important;'+
        '			min-width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnRetinaImage{'+
        '			max-width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImage{'+
        '			width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{'+
        '			max-width:100% !important;'+
        '			width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnBoxedTextContentContainer{'+
        '			min-width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageGroupContent{'+
        '			padding:9px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{'+
        '			padding-top:9px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{'+
        '			padding-top:18px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageCardBottomImageContent{'+
        '			padding-bottom:9px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageGroupBlockInner{'+
        '			padding-top:0 !important;'+
        '			padding-bottom:0 !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageGroupBlockOuter{'+
        '			padding-top:9px !important;'+
        '			padding-bottom:9px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnTextContent,.mcnBoxedTextContentColumn{'+
        '			padding-right:18px !important;'+
        '			padding-left:18px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{'+
        '			padding-right:18px !important;'+
        '			padding-bottom:0 !important;'+
        '			padding-left:18px !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcpreview-image-uploader{'+
        '			display:none !important;'+
        '			width:100% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		h1{'+
        '			/*@editable*/font-size:30px !important;'+
        '			/*@editable*/line-height:125% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		h2{'+
        '			/*@editable*/font-size:26px !important;'+
        '			/*@editable*/line-height:125% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		h3{'+
        '			/*@editable*/font-size:20px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		h4{'+
        '			/*@editable*/font-size:18px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        ''+
        '}	@media only screen and (max-width: 480px){'+
        '		.mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{'+
        '			/*@editable*/font-size:14px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{'+
        '			/*@editable*/font-size:16px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{'+
        '			/*@editable*/font-size:16px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        '}	@media only screen and (max-width: 480px){'+
        '		.footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{'+
        '			/*@editable*/font-size:14px !important;'+
        '			/*@editable*/line-height:150% !important;'+
        '		}'+
        '}</style></head>'+
        '    <body>'+
        '        <center>'+
        '            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">'+
        '                <tr>'+
        '                    <td align="center" valign="top" id="bodyCell">'+
        '                        <table border="0" cellpadding="0" cellspacing="0" width="100%">'+
        '                            <tr>'+
        '                                <td align="center" valign="top" id="templateHeader" data-template-container>'+
        '                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">'+
        '                                    <tr>'+
        '                                    <td align="center" valign="top" width="600" style="width:600px;">'+
        '                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">'+
        '                                        <tr>'+
        '                                            <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">'+
        '    <tbody class="mcnTextBlockOuter">'+
        '        <tr>'+
        '            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">'+
        '				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
        '				<tr>'+
        '			    '+
        '				<td valign="top" width="600" style="width:600px;">'+
        '                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">'+
        '                    <tbody><tr>'+
        '                        '+
        '                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">'+
        '                        '+
        '                            <h1><span style="font-size:35px"><span style="font-family:rubik,sans-serif"><span style="color:#FFFFFF">Consulta Crypto</span></span></span></h1>'+
        ''+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody></table>'+
        '				</td>'+
        '				</tr>'+
        '				</table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></td>'+
        '                                        </tr>'+
        '                                    </table>'+
        '                                    </td>'+
        '                                    </tr>'+
        '                                    </table>'+
        '                                </td>'+
        '                            </tr>'+
        '                            <tr>'+
        '                                <td align="center" valign="top" id="templateBody" data-template-container>'+
        '                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">'+
        '                                    <tr>'+
        '                                    <td align="center" valign="top" width="600" style="width:600px;">'+
        '                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">'+
        '                                        <tr>'+
        '                                            <td valign="top" class="bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">'+
        '    <tbody class="mcnTextBlockOuter">'+
        '        <tr>'+
        '            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">'+
        '				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
        '				<tr>'+
        '				<td valign="top" width="600" style="width:600px;">'+
        '                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">'+
        '                    <tbody><tr>'+
        '                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">'+
        '                            <h3 style="text-align: center;"><br>'+
        '<span style="font-size:24px"><span style="color:#000000">Thank you for your email!</span></span></h3>'+
        '<div style="text-align: center;"><span style="font-size:24px"><span style="color:#000000">I am looking forward to speaking to you.</span></span></div>'+
        `<p>${this.content}</p>`+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody></table>'+
        '				</td>'+
        '				</tr>'+
        '				</table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">'+
        '    <tbody class="mcnImageBlockOuter">'+
        '            <tr>'+
        '                <td valign="top" style="padding:9px" class="mcnImageBlockInner">'+
        '                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">'+
        '                        <tbody>'+
        '                           <tr>'+
        '                            <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">'+
        '                               <img align="center" alt="" src="https://mcusercontent.com/cc568c0798dfbe58bf1568734/images/2100d564-dbcf-42b0-8795-7dd40fbf3018.png" width="564" style="max-width:815px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">'+
        '                            </td>'+
        '                        </tr>'+
        '                       </tbody>'+
        '                       </table>'+
        '                </td>'+
        '            </tr>'+
        '    </tbody>'+
        '</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">'+
        '    <tbody class="mcnDividerBlockOuter">'+
        '        <tr>'+
        '            <td class="mcnDividerBlockInner" style="min-width:100%; padding:18px;">'+
        '                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
        '                    <tbody><tr>'+
        '                        <td>'+
        '                            <span></span>'+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody></table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">'+
        '    <tbody class="mcnDividerBlockOuter">'+
        '        <tr>'+
        '            <td class="mcnDividerBlockInner" style="min-width:100%; padding:18px;">'+
        '                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">'+
        '                    <tbody><tr>'+
        '                        <td>'+
        '                            <span></span>'+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody></table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></td>'+
        '                                        </tr>'+
        '                                    </table>'+
        '                                    </td>'+
        '                                    </tr>'+
        '                                    </table>'+
        '                                </td>'+
        '                            </tr>'+
        '                            <tr>'+
        '                                <td align="center" valign="top" id="templateFooter" data-template-container>'+
        '                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">'+
        '                                    <tr>'+
        '                                    <td align="center" valign="top" width="600" style="width:600px;">'+
        '                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">'+
        '                                        <tr>'+
        '                                            <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">'+
        '    <tbody class="mcnTextBlockOuter">'+
        '        <tr>'+
        '            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">'+
        '				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">'+
        '				<tr>'+
        '			    '+
        '				<td valign="top" width="600" style="width:600px;">'+
        '                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">'+
        '                    <tbody><tr>'+
        '                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">'+
        '                            <strong><em>Copyright © |2021| |Consulta Crypto| All rights reserved.</em><br>'+
        'www.consultacrypto.com<br>'+
        '<br>'+
        'Our mailing address is:<br>'+
        'contact@consultacrypto.com</strong>'+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody></table>'+
        '				</td>'+
        '				</tr>'+
        '				</table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width:100%;">'+
        '    <tbody class="mcnFollowBlockOuter">'+
        '        <tr>'+
        '            <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">'+
        '                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">'+
        '    <tbody><tr>'+
        '        <td align="center" style="padding-left:9px;padding-right:9px;">'+
        '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">'+
        '                <tbody><tr>'+
        '                    <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">'+
        '                        <table align="center" border="0" cellpadding="0" cellspacing="0">'+
        '                            <tbody><tr>'+
        '                                <td align="center" valign="top">'+
        '                                    <table align="center" border="0" cellspacing="0" cellpadding="0">'+
        '                                    <tr>'+
        '                                        <td align="center" valign="top">'+
        '                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">'+
        '                                                <tbody><tr>'+
        '                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">'+
        '                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">'+
        '                                                            <tbody><tr>'+
        '                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">'+
        '                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">'+
        '                                                                        <tbody><tr>'+
        '                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">'+
        '                                                                                    <a href="https://twitter.com/elAmericann" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-twitter-48.png" alt="Twitter" style="display:block;" height="24" width="24" class=""></a>'+
        '                                                                                </td>'+
        '                                                                        </tr>'+
        '                                                                    </tbody></table>'+
        '                                                                </td>'+
        '                                                            </tr>'+
        '                                                        </tbody></table>'+
        '                                                    </td>'+
        '                                                </tr>'+
        '                                            </tbody></table>'+
        '                                        '+
        '                                        </td>'+
        '                                        <td align="center" valign="top">'+
        '                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">'+
        '                                                <tbody><tr>'+
        '                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">'+
        '                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">'+
        '                                                            <tbody><tr>'+
        '                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">'+
        '                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">'+
        '                                                                        <tbody><tr>'+
        '                                                                           <td align="center" valign="middle" width="24" class="mcnFollowIconContent">'+
        '                                                                               <a href="https://www.consultacrypto.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png" alt="Website" style="display:block;" height="24" width="24" class=""></a>'+
        '                                                                           </td>'+
        '                                                                        </tr>'+
        '                                                                    </tbody></table>'+
        '                                                                </td>'+
        '                                                            </tr>'+
        '                                                        </tbody></table>'+
        '                                                    </td>'+
        '                                                </tr>'+
        '                                            </tbody></table>'+
        '                                        </td>'+
        '                                        <td align="center" valign="top">'+
        '                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">'+
        '                                                <tbody><tr>'+
        '                                                    <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">'+
        '                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">'+
        '                                                            <tbody><tr>'+
        '                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">'+
        '                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">'+
        '                                                                        <tbody><tr>'+
        '                                                                           <td align="center" valign="middle" width="24" class="mcnFollowIconContent">'+
        '                                                                               <a href="mailto:contact@consultacrypto.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-forwardtofriend-48.png" alt="Email" style="display:block;" height="24" width="24" class=""></a>'+
        '                                                                           </td>'+
        '                                                                        </tr>'+
        '                                                                    </tbody></table>'+
        '                                                                </td>'+
        '                                                            </tr>'+
        '                                                        </tbody></table>'+
        '                                                    </td>'+
        '                                                </tr>'+
        '                                            </tbody></table>'+
        '                                        </td>'+
        '                                    </tr>'+
        '                                    </table>'+
        '                                </td>'+
        '                            </tr>'+
        '                        </tbody></table>'+
        '                    </td>'+
        '                </tr>'+
        '            </tbody></table>'+
        '        </td>'+
        '    </tr>'+
        '</tbody></table>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></td>'+
        '                                        </tr>'+
        '                                    </table>'+
        '                                    </td>'+
        '                                    </tr>'+
        '                                    </table>'+
        '                                </td>'+
        '                            </tr>'+
        '                        </table>'+
        '                    </td>'+
        '                </tr>'+
        '            </table>'+
        '        </center>'+
        '    </body>'+
        '</html>';
    }
}

module.exports = Template;