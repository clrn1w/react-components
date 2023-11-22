"use client";

import Image from "next/image";

import ObserverLayout from "@/components/ObserverComponent";
import ContentLayout from "@/components/ContentLayout";
import InnerScrollbar from "@/components/InnerScrollbar";
import Button from "@/components/Button";

import someImg from "@/images/maomao.png";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <ContentLayout>
      <div className={styles.Wrapper}>
        <div style={{ width: "250px" }}>
          <h1>Button</h1>
          <div
            onClick={() => {
              alert("hi!");
            }}
          >
            <Button text="test" />
          </div>
        </div>
        <div style={{ overflow: "hidden", maxWidth: "800px" }}>
          <h1>Inner Scrollbar</h1>
          <InnerScrollbar>
            <div style={{ height: "200px" }}>
              <Image src={someImg} alt="img" />
            </div>
          </InnerScrollbar>
        </div>
        <div>
          <h1>Observer Component</h1>
          <ObserverLayout threshold={1}>
            {(isVisible) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "80vh",
                  backgroundColor: isVisible ? "#ff542e" : "#1a1a19",
                }}
              >
                <h3>{isVisible ? "visible" : "not visible"}</h3>
              </div>
            )}
          </ObserverLayout>
          <ObserverLayout>
            {(isVisible) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "80vh",
                  backgroundColor: isVisible ? "#ff542e" : "#1a1a19",
                }}
              >
                <h3>{isVisible ? "visible" : "not visible"}</h3>
              </div>
            )}
          </ObserverLayout>
        </div>
      </div>
    </ContentLayout>
  );
}
