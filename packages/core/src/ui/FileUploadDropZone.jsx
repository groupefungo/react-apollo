import React, {useEffect, useState, useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


export default (props) => {
    const {fileChanged, file, multiple} = props;
    const {filename} = file || {};
    // const initFiles = (file && filename) ? [file] : [];
    const initFiles = () => {
        const previousFiles = [];
        if (multiple) {
            file.map((f) => previousFiles.push(f));
            return previousFiles;
        }
        if (file && filename) return [file];

        return [];

    };
    const [files, setFiles] = useState(initFiles);
    const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({
        accept: 'image/*',
        multiple: !!multiple,
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles.map((file) => Object.assign(file, {
                preview: URL.createObjectURL(file),
            })));
            fileChanged(acceptedFiles);
        },
    });
    const removeFile = (file) => () => {
        const updatedFiles = files.filter(e => e !== file);
        setFiles(updatedFiles);
        fileChanged(updatedFiles);
    };
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }), [
        isDragActive,
        isDragReject,
    ]);

    const thumbs = files.map((file, index) => (
        <div style={thumb} key={`div${file}${index}`}>
            <div style={thumbInner} key={`subdiv ${file}${index}`}>
                <img
                    src={file.url || file.preview}
                    style={img}
                    onClick={removeFile(file)}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);


    return (
        <section className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Glissez votre fichier dans cet encadré ou cliquez à l'intérieur pour téléverser votre
                    logo</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
};
