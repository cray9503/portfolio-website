import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import styles from "./style.css";
import cx from "classnames";


export default class SelectedWork extends React.Component {

  render() {

    return (
        <div className={cx(styles.selectedWork, styles.five, styles.animate, styles.fadeInDown)}>
          <div className={styles.workTContainer} id={'selectedWork'}>
            <h3 className={styles.workT}>Selected Work</h3>
          </div>
          <div className={styles.projects}>
            <a href="http://www.ziing.me" target="_blank"><div className={styles.workContainer}>
              <h3 className={styles.workH}>Ziing</h3>
              <h3 className={styles.workDesc}>Freelance Website Build/Design</h3>
            </div></a>
            <a href="http://sappdevelopmentgroup.com/" target="_blank"><div className={styles.workContainer}>
              <h3 className={styles.btmHeader}>Sapp Development Group</h3>
              <h3 className={styles.workDesc}>Front-End Developer</h3>
            </div></a>
            <a href="https://github.com/assunta09/PartnerClient" target="_blank"><div className={styles.workContainer}>
              <h3 className={styles.workH}>The Partner</h3>
              <h3 className={styles.workDesc}>Front-End Developer</h3>
            </div></a>
            <a href="http://thewatch.herokuapp.com/" target="_blank"><div className={styles.workContainer}>
              <h3 className={styles.workH}>Watcher</h3>
              <h3 className={styles.workDesc}>Front-End Developer *Hackathon Winner</h3>
            </div></a>
          </div>
        </div>
    );
  }
}
