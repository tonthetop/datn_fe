import { FacebookProvider, Comments, Like, ShareButton } from 'react-facebook';
import React from 'react';
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { createFromIconfontCN, LikeOutlined } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export const CommentPlugin = () => {
    const location = useLocation()
    const href = "https://leanhtuan.com" + location.pathname
    console.log(href)
    return (
        <FacebookProvider appId="998182394159488">
            <Comments width="800" href={href} />
        </FacebookProvider>
    )
}

export const LikeButton = () => {
    const location = useLocation().pathname
    const href =encodeURIComponent("https://leanhtuan.com"+location)
    const url=`https://www.facebook.com/plugins/like.php?href=${href}%2F&width=174&layout=button_count&action=like&size=large&share=true&height=28&appId=998182394159488`
    console.log(url)
    return (
        <iframe src={url} width="174" height="28" style={{ border: "none", "overflow": "hidden" }}
            scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    );

}

export class ShareButtonn extends React.Component {
    render() {
        return (
            <FacebookProvider appId="998182394159488">
                <ShareButton href="http://www.facebook.com" className='d-flex align-items-center btn-primary px-2 ms-3' >
                    <span className='me-2'> Share</span>
                    <IconFont type="icon-facebook" />
                </ShareButton>
            </FacebookProvider>
        );
    }
}