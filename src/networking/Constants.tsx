export class ConstantesNetwork {
  // public static BLOG_HOST = "http://localhost";
  //public static BLOG_HOST_PORT = "3001";
  public static BLOG_HOST = "http://15.236.19.160";
  public static BLOG_HOST_PORT = 49160;
  public static recoverFullBaseURL(): string {
    return this.BLOG_HOST + ":" + this.BLOG_HOST_PORT;
  }
}
export default ConstantesNetwork;