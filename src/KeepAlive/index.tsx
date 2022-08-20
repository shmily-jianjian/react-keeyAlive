import React, { createContext, useContext, FC } from "react";
import { matchPath, useLocation, useOutlet } from "react-router-dom";

interface KeepAliveLayoutProps {
  keepalive: any[];
  keepElements?: any;
  dropByCacheKey?: (path: string) => void;
}

export const KeepAliveContext = createContext<KeepAliveLayoutProps>({
  keepalive: [],
  keepElements: {},
});

// 判断是否需要keep
const isKeepPath = (aliveList: any[], path: string) => {
  let isKeep = false;
  aliveList.map((item) => {
    if (item === path) {
      isKeep = true;
    }
    if (item instanceof RegExp && item.test(path)) {
      isKeep = true;
    }
    if (typeof item === "string" && item.toLowerCase() === path) {
      isKeep = true;
    }
  });
  return isKeep;
};

// keepalive 数组路径
export function useKeepOutlets() {
  const location = useLocation();
  const element = useOutlet();
  const { keepElements, keepalive } = useContext<any>(KeepAliveContext);
  console.log(keepElements);

  const isKeep = isKeepPath(keepalive, location.pathname);
  if (isKeep) {
    keepElements.current[location.pathname] = element;
  }
  return (
    <>
      {Object.entries(keepElements.current).map(([pathname, element]: any) => (
        <div
          key={pathname}
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden auto",
          }}
          className="rumtime-keep-alive-layout"
          hidden={!matchPath(location.pathname, pathname)}
        >
          {element}
        </div>
      ))}
      <div
        hidden={isKeep}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden auto",
        }}
        className="rumtime-keep-alive-layout-no"
      >
        {!isKeep && element}
      </div>
    </>
  );
}

const KeepAliveLayout: FC<KeepAliveLayoutProps & any> = (props) => {
  const { keepalive, ...other } = props;
  const keepElements = React.useRef<any>({});

  // 清除缓存
  function dropByCacheKey(path: string) {
    keepElements.current[path] = null;
  }

  return (
    <KeepAliveContext.Provider
      value={{ keepalive, keepElements, dropByCacheKey }}
      {...other}
    >
      {props.children}
    </KeepAliveContext.Provider>
  );
};

export default KeepAliveLayout;
