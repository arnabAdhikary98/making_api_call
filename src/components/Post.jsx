function Post({ first_name, last_name, avatar }) {
  return (
    <div>
      <img src={avatar} alt="" />
      <p>Name : {first_name} {last_name}</p>
    </div>
  );
}

export default Post;
