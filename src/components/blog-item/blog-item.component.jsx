import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CKEditor from 'ckeditor4-react';

// Components
import ModalPortal from '../modal-portal/modal-portal.component';
import FormInput from '../forms/form-input/form-input.component';

// Styles
import './blog-item.styles.scss';

const BlogItem = ({ opened, close }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const history = useHistory();
  return (
    <ModalPortal opened={opened} close={close}>
      <div className="box">
        <div className="tworow">
          <FormInput
            label="Title"
            type="text"
            value={blogTitle}
            handleChange={(e) => setBlogTitle(e.target.value)}
          />

          <FormInput
            label="Image link"
            type="text"
            value={blogImage}
            handleChange={(e) => setBlogImage(e.target.value)}
          />
        </div>

        <CKEditor onChange={(evt) => setBlogContent(evt.editor.getData())} />
      </div>
    </ModalPortal>
  );
};
export default BlogItem;
