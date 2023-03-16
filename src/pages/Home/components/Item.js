const Item = ({ info }) => {
    return <div className="item">
     {info}
        <button className="remove">刪除</button>
    </div>
}

export default Item