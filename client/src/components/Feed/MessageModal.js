import React, { useState } from "react";
import { Modal, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getInitialsFromFullName } from "utils/userInfo";
import TextAvatar from "components/TextAvatar";
import { mq } from "constants/theme";
import { LOGIN } from "templates/RouteWithSubRoutes";
import activeemail from "assets/icons/active-email.svg";

// Styled Components for OrgPostRef
const Container = styled.div`
  h4 {
    font-size: 0.857em;
    color: rgba(0, 0, 0, 0.2);
  }
  margin-bottom: 1em;
`;

const RefPost = styled.div`
  height: 7.571em;
  width: 42.286em;
  border-radius: 6px;
  padding: 1.3em 1em 1.3em 0em;
  z-index: 9999;
  opacity: 1;
  header {
    .author {
      font-size: 0.857em;
      font-weight: 600;
      position: relative;
      bottom: 1em;
    }
    h3 {
      font-size: 1.143em;
      font-weight: 700;
    }
    .ant-avatar {
      height: 1.8em;
      line-height: 2.4rem;
      margin-right: 0.7rem;
      margin-left: 0.7rem;
      width: 1.8em;
      display: inline-block;
    }
  }
  .content {
    font-size: 1em;
  }
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    header > h3,
    .content {
      width: 80%;
      max-width: 32.143em;
    }
  }
  @media screen and (max-width: 570px) {
    header > h3,
    .content {
      width: 70%;
      max-width: 32.143em;
    }
  }
  @media screen and (max-width: ${mq.phone.narrow.maxWidth}) {
    header > h3,
    .content {
      width: 60%;
      max-width: 32.143em;
    }
  }
  @media screen and (max-width: 321px) {
    header > h3,
    .content {
      width: 50%;
      max-width: 32.143em;
    }
  }
  @media screen and (max-width: 282px) {
    header > h3,
    .content {
      width: 40%;
      max-width: 32.143em;
    }
  }
`;
const OrgPostRef = ({ title, content, postAuthor }) => {
  const Avatar = getInitialsFromFullName(postAuthor);

  return (
    <Container>
      <RefPost>
        <header>
          <div className="author">
            To:<TextAvatar>{Avatar}</TextAvatar> {postAuthor}
          </div>
          <h3>{title}</h3>
        </header>
        <div className="content">
          {content.length < 80 ? content : `${content.substring(0, 75)}...`}
        </div>
      </RefPost>
    </Container>
  );
};

// Styled Components for MessageModal
const MsgBtn = styled(Button)`
  color: white;
  margin-left: 1.429em;
`;

const MsgModal = styled(Modal)`
  .ant-modal-title {
    font-weight: 700;
    font-size: 1.2em;
  }
  .ant-modal-close-x {
    display: none;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      display: block;
    }
  }
  .ant-modal-header {
    border-bottom: none;
    font-size: 1.286em;
    padding: 1em 0;
  }
  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    border-top: none;
    bottom: 1em;
    width: 100%;
    border-radius: none;
    padding: 0.714em 5px;
    .ant-btn {
      box-shadow: none;
      height: 2.5em;
      width: 8.643em;
      font-size: 1.143em;
      letter-spacing: 0.5px;
      outline: none;
      transition: none;
      -webkit-transition: none;
      :first-child {
        border: none;
        border-radius: none;
        background-color: white;
        color: #425af2;
        position: relative;
        top: 0.4em;
      }
      :last-child {
        border: 0.2rem solid #425af2;
        border-radius: 4.6rem;
        background-color: #425af2;
        color: white;
        position: relative;
        top: 0.4em;
      }
    }
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      border-radius: 0;
      .ant-modal-close-x {
        display: block;
      }
      button {
        margin-left: 0;
      }
      .ant-btn:last-child,
      div {
        width: 100%;
      }
      .ant-btn:first-child {
        display: none;
      }
    }
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-content {
    position: relative;
    right: 6em;
    height: 31.071em;
    width: 46.857em;
    border-radius: 0.714em;
    padding: 1.5em 2em;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      border-radius: 0;
      background-color: white;
    }
  }

  textarea {
    border: 1px solid lightgrey;
    border-radius: 6px;
    height: 9.714em;
    width: 100%;
    margin: 0 0 1em 0;
    padding: 1em;
    resize: none;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      height: 51vh;
      margin: 2.3em 0 0.5em 0;
    }
    @media screen and (max-width: 570px) {
      height: 48vh;
      margin: 2.3em 0 0.1em 0;
    }
    @media screen and (max-width: 282px) {
      height: 51vh;
      margin: 3.5em 0 0em 0;
    }
    :focus {
      border: 1px solid #425af2;
    }
  }
`;

const SuccessModal = styled(MsgModal)`
  .modal-footer-container {
    width: 100%;
    height: 2.857em;
    display: flex;
    position: absolute;
    bottom: 1.7em;
    right: 3em;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      position: relative;
      justify-content: center;
      top: 4.2em;
      right: 0em;
    }
  }
  .view-message-btn {
    border: 0.2rem solid #425af2;
    border-radius: 4.6rem;
    background-color: #425af2;
    color: white;
    width: 14.143em;
    height: 2.857em;
    box-shadow: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0.9em;
    z-index: 999;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      width: 90%;
      position: static;
    }
  }
  p {
    padding-top: 1em;
    width: 100%;
    font-size: 1.143em;
  }

  .ant-modal-title {
    text-align: center;
    padding-top: 1em;
    font-size: 1.571em;
  }
  .ant-modal-content {
    height: 20.5em;
    width: 46.857em;
    border-radius: 0.714em;
    padding: 1.5em 2em;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      position: relative;
      margin: auto;
      height: 50%;
      width: 90%;
      border-radius: 0.714em;
      padding: 1.5em 2em;
    }
  }
  .ant-modal-footer > div {
    position: absolute;
    bottom: 2.143em;
    right: 6.786em;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      position: static;
    }
  }
  .ant-btn:last-child {
    visibility: hidden;
  }
`;

const FailedModal = styled(SuccessModal)`
  p {
    font-size: 1em;
    text-align: center;
  }
  .ant-modal-title {
    padding-top: 0.5em;
  }
  .ant-modal-content {
    height: 14em;
    width: 50em;
    padding: 0em 6em;
    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      position: relative;
      padding: 0em 2em;
      margin: auto;
      width: 90%;
      height: 50%;
    }
  }
  .ant-btn {
    :first-child {
      display: block !important;
    }
    :last-child {
      display: none !important;
    }
  }
  .ant-modal-footer > div {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 0.5em;
    width: 100%;
    right: 0;
  }
  .ant-modal-close-x {
    display: none;
  }
`;

const MessageModal = ({
  title,
  postContent,
  postAuthor,
  isAuthenticated,
  postId,
}) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [text, setText] = useState("");
  const [msgRsp, setMsgRsp] = useState(true);
  const PrivateMessageContainer = styled.div`
    margin-left: 3em;
    :hover {
      color: #939393;
    }
    svg {
      position: relative;
      top: 0.2em;
    }
    span {
      position: relative;
      left: 0.5em;
    }
  `;
  const showModal = async () => {
    await setVisible(true);
    document.querySelector(".ant-modal-root").style.opacity = 0;
    setTimeout(() => {
      document.querySelector(".ant-modal-root").style.opacity = 1;
    }, 400);
  };
  const handleOk = async () => {
    await setConfirmLoading(true);
    setTimeout(() => {
      setMsgSent(true);
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDone = () => {
    setMsgSent(false);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      {isAuthenticated ? (
        <div>
          <PrivateMessageContainer onClick={showModal}>
            <img src={activeemail} />
            <span>Message</span>
          </PrivateMessageContainer>
          <MsgModal
            title="Send a message"
            visible={visible}
            onOk={handleOk}
            okText="Send"
            onCancel={handleCancel}
            confirmLoading={confirmLoading}
            okButtonProps={{ disabled: !text }}
          >
            <OrgPostRef
              title={title}
              content={postContent}
              postAuthor={postAuthor}
            />
            <textarea
              placeholder="Type a message..."
              onChange={handleTextChange}
            />
          </MsgModal>
          {msgRsp ? (
            <SuccessModal
              title="🎉 Your message was successfully sent"
              visible={msgSent}
              okText="View message"
              onCancel={handleDone}
              cancelText="Done"
            >
              <p>
                Your message to {postAuthor} concerning the "{title}" was sent
                succesfully.
              </p>
              <div className="modal-footer-container">
                <Link className="view-message-btn" to="/inbox">
                  View Message
                </Link>
              </div>
            </SuccessModal>
          ) : (
            <FailedModal
              title="🚧  Oops, something went wrong"
              visible={msgSent}
              onCancel={handleDone}
              cancelText="Close"
            >
              <p>
                Your message to {postAuthor} concerning the "{title}" was not
                sent succesfully. Please try again later.
              </p>
            </FailedModal>
          )}
        </div>
      ) : (
        <Link
          onClick={() =>
            sessionStorage.setItem("postredirect", `/post/${postId}`)
          }
          to={{
            pathname: LOGIN,
            state: { from: window.location.href },
          }}
        >
          <PrivateMessageContainer>
            <img src={activeemail} />
            <span>Message</span>
          </PrivateMessageContainer>
        </Link>
      )}
    </>
  );
};

export default MessageModal;
