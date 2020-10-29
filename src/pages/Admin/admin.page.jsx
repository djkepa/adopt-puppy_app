import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CKEditor from 'ckeditor4-react';

// Redux
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from './../../redux/Products/products.action';

//Components
import Modal from './../../components/modal/modal.component';
import FormInput from './../../components/forms/form-input/form-input.component';
import FormSelect from './../../components/forms/form-select/form-select.component';
import Button from './../../components/forms/button/button.component';
import LoadMore from './../../components/load-more/load-more.component';
import BlogItem from './../../components/blog-item/blog-item.component';

// Styles
import './admin.styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('toys');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productWoP, setProductWoP] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [productDiscount, setProductDiscount] = useState('');
  const [productRating, setProductRating] = useState(0);

  const [modalOpened, setModalOpened] = useState(false);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('toys');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setProductWoP('');
    setProductDesc('');
    setProductDiscount('');
    setProductRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productWoP,
        productDesc,
        productDiscount,
        productRating,
      }),
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      }),
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  return (
    <div className="admin">
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
          <li>
            <Button onClick={() => setModalOpened(!modalOpened)}>
              Add new blog
            </Button>
            {/* <Button>
              <Link to="/blog">Add new blog</Link>
            </Button> */}
          </li>
        </ul>
      </div>

      <BlogItem opened={modalOpened} close={() => setModalOpened(false)} />

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <div className="tworow">
              <h2>Add new product</h2>

              <FormSelect
                label="Category"
                options={[
                  {
                    value: 'toys',
                    name: 'Toys',
                  },
                  {
                    value: 'food',
                    name: 'Food',
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />
            </div>

            <div className="tworow">
              <FormInput
                label="Name"
                type="text"
                value={productName}
                handleChange={(e) => setProductName(e.target.value)}
              />

              <FormInput
                label="Main image URL"
                type="url"
                value={productThumbnail}
                handleChange={(e) => setProductThumbnail(e.target.value)}
              />
            </div>

            <div className="tworow">
              <FormInput
                label="Price"
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                value={productPrice}
                handleChange={(e) => setProductPrice(e.target.value)}
              />

              <FormInput
                label="Discount"
                type="text"
                value={productDiscount}
                handleChange={(e) => setProductDiscount(e.target.value)}
              />
            </div>
            <div className="tworow">
              <FormInput
                label="Rating"
                type="number"
                min="0.00"
                max="5.00"
                value={productRating}
                handleChange={(e) => setProductRating(e.target.value)}
              />

              <FormInput
                label="Weight or Piece"
                type="text"
                value={productWoP}
                handleChange={(e) => setProductWoP(e.target.value)}
              />
            </div>

            <CKEditor
              onChange={(evt) => setProductDesc(evt.editor.getData())}
            />
            <br />
            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>

      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((product, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID,
                        } = product;

                        return (
                          <tr key={index}>
                            <td>
                              <img className="thumb" src={productThumbnail} />
                            </td>
                            <td>{productName}</td>
                            <td>£{productPrice}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  dispatch(deleteProductStart(documentID))
                                }
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
