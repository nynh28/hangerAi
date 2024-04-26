import React, { useEffect, useRef, useState } from "react";
import CommonStyles from "../../../components/CommonStyles";
import { useGet } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";
import { Socket, io } from "socket.io-client";

const infos = {
  "item category": "hoodie",
  "attributes informations": {
    silhouette: ["symmetrical", "regular (fit)", "loose (fit)"],
    length: ["above-the-hip (length)"],
    "textile pattern": ["plain (pattern)"],
    sleeve: ["wrist-length", "dropped-shoulder sleeve"],
    hood: [],
  },
  Company: "Miracle Hanger Luan",
};

const TestSocket = () => {
  //! State
  const socket = useGet(cachedKeys.socket);
  const [content, setContent] = useState("");

  //! Function
  const testSocket = () => {
    console.log("emit switch");
    socket.emit("start_process", {
      "item category": "hoodie",
      "attributes informations": {
        silhouette: ["symmetrical", "regular (fit)", "loose (fit)"],
        length: ["above-the-hip (length)"],
        "textile pattern": ["plain (pattern)"],
        sleeve: ["wrist-length", "dropped-shoulder sleeve"],
        hood: [],
      },
      Company: "Miracle Hanger Luan",
    });
  };

  useEffect(() => {
    let generatedContent = "";
    let count = 0;
    let interval;
    socket.on("chunk_retrieve", (data) => {
      console.log("received chunk", data);
      generatedContent += ` ${data}`;
      if (!interval) {
        console.log("go here");
        interval = setInterval(() => {
          setContent(generatedContent.slice(0, count));
          count++;
          if (count > generatedContent.length) {
            clearInterval(interval);
            interval = null;
          }
        }, 100);
      }
    });

    // socket.on("generated content", (data) => {
    //   console.log("data", data);
    // });

    // socket.on("connect", (data) => {
    //   console.log("data", data);
    // });
  }, [socket]);

  //! Render
  return (
    <CommonStyles.Box centered sx={{ flexDirection: "column" }}>
      <CommonStyles.Button onClick={testSocket}>
        Test socket
      </CommonStyles.Button>
      <CommonStyles.Box>{content}</CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default TestSocket;
