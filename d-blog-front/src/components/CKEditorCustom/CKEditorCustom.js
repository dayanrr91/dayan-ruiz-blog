import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

import './CKEditorCustom.css';

export default class CKEditorCustom extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            content: props.content
        };

        this.onEditorChange = this.onEditorChange.bind( this );
    }

    onEditorChange( evt ) {
        var content = evt.editor.getData()
        this.props.onChangeContent(content);    
    }

    render() {
        return (
            <div className="ckeditor-container col-12">
                <CKEditor
                    data={ this.state.data }
                    onChange={ this.onEditorChange } 
                    config={ { height: [ [ '700' ] ] } }/>                                   
            </div>
        );
    }
}
