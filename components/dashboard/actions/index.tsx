import React from "react";

import { TopicStatus } from "@/components/dashboard/topic/constants";

import styles from "./Actions.module.sass";
import GenerateButton from "./generate";
import ManageButton from "./manage";
import ViewButton from "./view";

interface IActionButtonProps {
  type: TopicStatus;
  id: number;
  handleFetchTopics: () => any;
}

interface IActionButtonWrapper {
  children: React.ReactNode;
}

const ActionButtonWrapper = ({ children }: IActionButtonWrapper) => {
  return <div className={styles.actionButtonsWrapper}>{children}</div>;
};

const ActionButton = ({ type, id, handleFetchTopics }: IActionButtonProps) => {
  return {
    // [TopicStatus.CREATED]: (
    //   <ActionButtonWrapper>
    //     <ManageButton />
    //   </ActionButtonWrapper>
    // ),
    [TopicStatus.GENERATING]: (
      <ActionButtonWrapper>
        <></>
      </ActionButtonWrapper>
    ),
    [TopicStatus.COMPLETED]: (
      <ActionButtonWrapper>
        {/* <ManageButton /> */}
        <ViewButton id={id} />
        <GenerateButton id={id} handleFetchTopics={handleFetchTopics} />
      </ActionButtonWrapper>
    ),
    [TopicStatus.ATTEMPTING]: (
      <ActionButtonWrapper>
        {/* <ManageButton /> */}
        <ViewButton id={id} />
      </ActionButtonWrapper>
    ),
  }[type];
};

export default ActionButton;
