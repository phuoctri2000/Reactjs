import { Button, Col, Divider, Form, Input, Row } from "antd"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addNoteRequest, removeNoteRequest } from "./redux/slicers/note.slice"
import { useMemo, useState } from "react"

function App() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { noteList } = useSelector((state) => state.note)
  const [showDetail, setShowDetail] = useState(false)

  const handleAddNewTitle = () => {
    const newNote = { ...form.getFieldValue() }
    dispatch(
      addNoteRequest({
        data: newNote,
      })
    )
    form.resetFields()
  }

  const handleRemoveNote = (index) => {
    dispatch(removeNoteRequest({ index: index }))
  }

  const renderNoteList = noteList.data.map((item) => {
    return (
      <div key={item.index} className="note">
        <Row>
          <Col span={12}>{item.title}</Col>
          <Col span={12}>
            <div>Recorded: </div>
            <div>
              <button
                onClick={() => {
                  setShowDetail(!showDetail)
                }}
              >
                Show detail
              </button>
              <button onClick={() => handleRemoveNote(item.index)}>
                remove
              </button>
            </div>
          </Col>
        </Row>
        <div className={showDetail === true ? "detail_show" : "detail_hide"}>
          Detail: {item.detail}
        </div>
      </div>
    )
  })
  return (
    <div className="App">
      <h1> Timestamped Notes App</h1>
      <Row justify={"center"}>
        <Col span={12}>
          <Form
            form={form}
            name="addNote"
            onFinish={handleAddNewTitle}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item name="title">
              <Input placeholder="Note title" />
            </Form.Item>

            <Form.Item name="detail">
              <Input.TextArea placeholder="Note Details" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add note
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={14}>
          <Divider />
        </Col>
        <Col span={14}>{renderNoteList}</Col>
      </Row>
    </div>
  )
}

export default App
