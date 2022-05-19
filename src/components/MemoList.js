import { Component } from "react";
import '../CSS/MemoList.css';

/* 메모 리스트 */ 
class MemoList extends Component {
    constructor(props) {
        super(props);

        // 메모 목록을 state
        this.state = {
            memo: [
                {id: 1, text: '메모를 작성했습니다'},
                {id: 2, text: '내용'}
            ],
            // text와 id
            inputId: 3,
            inputText: ''
        }
    };

    /* 메모 삭제 */
    deleteMemo = (id) => {
        const nextMemo = this.state.memo.filter((m) => m.id !== id);
        this.setState({memo: nextMemo});
    }

    /* */
    changeText = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    /* */
    getText = () => {
        const nextMemo = this.state.memo.concat({
            id: this.state.inputId,
            text: this.state.inputText
        });

        this.setState({memo: nextMemo});
        this.setState((prevState) => ({inputId: prevState.inputId +1}));
    };
    
    render() {
        const {memo} = this.state;
        const listMemo = memo.map((m) => 
            <li key={m.id}>
                {m.text}
                <button onClick={() => {this.deleteMemo(m.id)}}>
                    X
                </button>
            </li>);

        return(
            <div>
                <div>
                    <h1 className="text-style">메모를 작성하세요</h1>
                    {/* 메모 작성 */}
                    <input 
                    className="input-style"
                    type='text' name='inputText' onChange={this.changeText}></input>
                    <button onClick={this.getText}>+</button>
                </div>

                {/* 테이블로 작성한 메모 */}
                <div className="memo-style">
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>메모</th>
                                <th>삭제</th>
                            </tr>
                            {memo.map((m) => (
                                <tr key={m.id}>
                                    <td>{m.id}</td>
                                    <td>{m.text}</td>
                                    <td>
                                        <button onClick={() => {this.deleteMemo(m.id)}}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};

export default MemoList;