import React, { useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import useUiContext from './UseContext';
import {useAppContext} from "../app/UseContext/useAppContext";

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 50,
    height: 50,
    padding: 4,
    boxSizing: 'border-box',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
};

const thumbDelete = {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
    cursor: 'pointer',
    '&::hover': {
        opacity: '50%',
    },
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
    transition: 'all .24s ease-in-out',
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
    const {useTranslate} = useAppContext();
    const {t} = useTranslate();
    const [deleteButton, setDeleteButton] = useState(-1);
    const { fileChanged, file, multiple, placeHolder = t('deposit_files') } = props;
    const { filename } = file || {};
    const initFiles = () => {
        const previousFiles = [];
        if (multiple) {
            file.map((f) => previousFiles.push(f));
            return previousFiles;
        }
        if (file && filename) return [file];

        return [];
    };
    const {Fade, IconButton, CancelIcon, Typography} = useUiContext();
    const [files, setFiles] = useState(initFiles);
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: 'image/*',
        multiple: !!multiple,
        onDrop: (acceptedFiles) => {
            if (multiple) {
                const newFiles = [...files, ...acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file),
                }))];
                setFiles(newFiles);
            } else {
                setFiles(acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })));
            }
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
        <div
            style={thumb}
            key={`div${file}${index}`}
            onMouseEnter={() => setDeleteButton(index)}
            onMouseLeave={() => setDeleteButton(-1)}
            onClick={removeFile(file)}
        >
            <Fade in={deleteButton === index}>
                <div style={thumbDelete}>
                    <IconButton
                        onClick={removeFile(file)}
                        style={{
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CancelIcon fontSize="small" color="primary" />
                    </IconButton>
                </div>
            </Fade>
            <div style={thumbInner} key={`subdiv ${file}${index}`}>
                <img
                    src={file.url || file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    return (
        <section className="container">
            {thumbs.length > 0 && (
                <Typography variant="caption" color="textSecondary">{t('images')}</Typography>
            )}
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>{placeHolder} </p>
            </div>
        </section>
    );
};