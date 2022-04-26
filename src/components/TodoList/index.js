import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const handdleButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        prioriry: "",
        completed: false,
      })
    );
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (e) => {};
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            // defaultValue="Medium"
            value={prioriry}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handdleButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
