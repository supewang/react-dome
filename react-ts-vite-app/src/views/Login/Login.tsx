import styles from "./Login.module.scss";
import { Button, message, Form, Input, Row, Col } from "antd";

export default function Login() {
  const [form] = Form.useForm();
  type FieldType = {
    email: string;
    pass: string;
  };
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <span className={styles["header-title"]}>在线考勤系统</span>
      </div>
      <div className={styles.desc}>
        零基础从入门到进阶，系统掌握前端三大热门技术(Vue、React、TypeScript)
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.main}
        autoComplete="off"
        form={form}
      >
        <Form.Item<FieldType>
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入正确的邮箱地址" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="pass"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
