import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CKEditor from 'ckeditor4-react';

// Components
import FormInput from '../../forms/form-input/form-input.component';
import Button from '../../forms/button/button.component';

import { addBlogStart } from '../../../redux/Blog/blog.actions';

import { ReactComponent as ArrowBack } from '../../../assets/left-arrow2.svg';

// Styles
import './create-blog.styles.scss';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const CreateBlog = ({ opened, close }) => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addBlogStart({
        id: Math.floor(Math.random() * 1000000),
        title,
        content,
        image,
        author: currentUser.displayName,
        authorId: currentUser.id,
      }),
    );

    resetForm();
    history.push('/blog');
  };

  return (
    // <ModalPortal opened={opened} close={close}>
    <form className="createblog">
      <div className="createblog-backarrow">
        <ArrowBack
          onClick={() => history.push('/blog')}
          className="createblog-backarrow-icon"
        />
        <h2 className="createblog-h2">Create Blog</h2>
      </div>
      <FormInput
        type="text"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <FormInput
        label="Main image URL"
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <CKEditor onChange={(evt) => setContent(evt.editor.getData())} />
      <br />
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
    // </ModalPortal>
  );
};

export default CreateBlog;
