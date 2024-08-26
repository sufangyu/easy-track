import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = dirname(__filename);

// 端口
export const PORT = 2020;

// 静态资源
const resolveDirname = (target: string) => resolve(__dirname, target);
const jsFilePath = resolveDirname("../js");
const VueFilePath = resolveDirname("../vue2");
// 资源包
const browserDistFilePath = resolve("./packages/browser/dist");
const webDistFilePath = resolve("./packages/web/dist");

export const FILE_PATHS = {
  "/js": jsFilePath,
  "/vue": VueFilePath,

  "/browserDist": browserDistFilePath,
  "/webDist": webDistFilePath,
};

export const SERVER_URLS = {
  normalGet: "/normal",
  authGet: "/auth",
  exceptionGet: "/exception",
  normalPost: "/normal/post",
  exceptionPost: "/exception/post",
  errorsUpload: "/errors/upload",
};
