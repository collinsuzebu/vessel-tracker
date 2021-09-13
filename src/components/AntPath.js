import {
  createElementHook,
  createPathHook,
  createContainerComponent,
} from "@react-leaflet/core";
import { antPath } from "leaflet-ant-path";

function createAntPath(props, context) {
  const instance = antPath(props.markers, props.options);
  return { instance, context: { ...context, overlayContainer: instance } };
}

function updateAntPath(instance, props, prevProps) {
  if (
    props.markers !== prevProps.markers ||
    props.options !== prevProps.options
  ) {
    instance.setLatLngs(props.markers);
    instance.setStyle(props.options);
  }
}

const useAntPathElement = createElementHook(createAntPath, updateAntPath);
const useAntPath = createPathHook(useAntPathElement);
const AntPath = createContainerComponent(useAntPath);

export default AntPath;
