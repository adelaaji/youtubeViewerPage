import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
class SearchBlock extends Component {
  handleSubmit = values => {
    console.log("CHannel id", values);
    this.props.getVideos(values.channelId);
  };

  componentDidMount() {
    console.log("searchblock", this.props);
  }
  render() {
    const channelId = this.props.result.channelId;

    return (
      <React.Fragment>
        <Formik
          enableReinitialize
          initialValues={{
            channelId: channelId !== undefined ? channelId : ""
          }}
          onSubmit={values => this.handleSubmit(values)}
        >
          {() => (
            <React.Fragment>
              <Form className="youtube-search-form">
                <div className="row">
                  <div className="col">
                    <Field
                      type="text"
                      name="channelId"
                      placeholder="please type channel Id"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="channelId"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-success text-uppercase mt-0 btn-block"
                    >
                      Search.
                    </button>
                  </div>
                </div>
              </Form>
            </React.Fragment>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}

export default SearchBlock;
