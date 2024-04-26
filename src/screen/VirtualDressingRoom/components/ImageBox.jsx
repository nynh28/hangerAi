import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import PerfectScrollBar from "react-perfect-scrollbar";


const listImages = [
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },

    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 1,
        path: 'https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',

    },
    {
        id: 2,
        path: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',

    },
    {
        id: 1,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
    },
    {
        id: 0,
        path: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-dep-006.jpg',
    },
    {
        id: 3,
        path: 'https://bizweb.dktcdn.net/100/409/545/products/z3977215474781-f3fcdedeffd99d3b5b74ae6a54ab8eb4.jpg?v=1671615353703',
    },

]
const ImageBox = ({ isActive }) => {
    const filteredImages = listImages.filter(image => image.id === isActive);

    return (
        <PerfectScrollBar
            style={{
                maxHeight: "96%",             
            }}
        >
            <CommonStyles.Box
                sx={{
                    marginTop: "10px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // Chia thành 3 cột bằng nhau
                    gap: "15px",
                }}
            >
                {filteredImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.path}
                        alt={`image-${index}`}
                        width='100%'
                        height='180px'
                        style={{ borderRadius: "4px" ,cursor: "pointer"}} // Khoảng cách dưới của mỗi hình ảnh
                    />
                ))}
            </CommonStyles.Box>
        </PerfectScrollBar>
    )
}

export default ImageBox;