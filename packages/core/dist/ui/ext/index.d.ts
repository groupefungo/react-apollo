/// <reference types="react" />
/// <reference types="styled-jsx" />
import GetAppIcon from '@material-ui/icons/GetApp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
declare const _default: () => {
    DrawerState: {
        state: boolean;
        toggleDrawer: (open: any) => (event: any) => void;
    };
    makeStyles: typeof makeStyles;
    Chip: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").ChipTypeMap<{}, "div">>;
    Container: import("react").ComponentType<import("@material-ui/core").ContainerProps>;
    GetAppIcon: typeof GetAppIcon;
    Typography: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").TypographyTypeMap<{}, "span">>;
    CssBaseline: import("react").ComponentType<import("@material-ui/core").CssBaselineProps>;
    ThemeProvider: typeof ThemeProvider;
    Grid: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").GridTypeMap<{}, "div">>;
    Button: import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").ButtonTypeMap<{}, "button">>;
    Divider: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").DividerTypeMap<{}, "hr">>;
    Card: import("react").ComponentType<import("@material-ui/core").CardProps>;
    CardContent: import("react").ComponentType<import("@material-ui/core").CardContentProps>;
    CardHeader: import("react").ComponentType<import("@material-ui/core").CardHeaderProps>;
    CardActions: import("react").ComponentType<import("@material-ui/core").CardActionsProps>;
    TextField: import("react").ComponentType<import("@material-ui/core").TextFieldProps>;
    Checkbox: import("react").ComponentType<import("@material-ui/core").CheckboxProps>;
    FormControl: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").FormControlTypeMap<{}, "div">>;
    FormControlLabel: import("react").ComponentType<import("@material-ui/core").FormControlLabelProps>;
    FormGroup: import("react").ComponentType<import("@material-ui/core").FormGroupProps>;
    FormHelperText: import("react").ComponentType<import("@material-ui/core").FormHelperTextProps>;
    FormLabel: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").FormLabelTypeMap<{}, "label">>;
    Tooltip: import("react").ComponentType<import("@material-ui/core").TooltipProps>;
    AppBar: typeof AppBar;
    AddIcon: typeof GetAppIcon;
    Fab: import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").FabTypeMap<{}, "button">>;
    Paper: import("react").ComponentType<import("@material-ui/core").PaperProps>;
    Table: import("react").ComponentType<import("@material-ui/core").TableProps>;
    TableBody: import("react").ComponentType<import("@material-ui/core").TableBodyProps>;
    TableCell: import("react").ComponentType<import("@material-ui/core").TableCellProps>;
    TableContainer: import("react").ComponentType<import("@material-ui/core").TableContainerProps>;
    TableHead: import("react").ComponentType<import("@material-ui/core").TableHeadProps>;
    TableRow: import("react").ComponentType<import("@material-ui/core").TableRowProps>;
    Breadcrumbs: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").BreadcrumbsTypeMap<{}, "nav">>;
    HelpOutlineOutlinedIcon: typeof GetAppIcon;
    DateFnsUtils: typeof DateFnsUtils;
    KeyboardDatePicker: import("react").FC<import("@material-ui/pickers").KeyboardDatePickerProps>;
    MuiPickersUtilsProvider: import("react").FC<import("@material-ui/pickers/MuiPickersUtilsProvider").MuiPickersUtilsProviderProps>;
    AttachFile: typeof GetAppIcon;
    Select: import("react").ComponentType<import("@material-ui/core").SelectProps>;
    MenuItem: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").MenuItemTypeMap<{
        button: false;
    }, "li">> & ((props: {
        href: string;
    } & {
        action?: ((instance: import("@material-ui/core").ButtonBaseActions | null) => void) | import("react").RefObject<import("@material-ui/core").ButtonBaseActions> | null | undefined;
        buttonRef?: ((instance: unknown) => void) | import("react").RefObject<unknown> | null | undefined;
        centerRipple?: boolean | undefined;
        disabled?: boolean | undefined;
        disableRipple?: boolean | undefined;
        disableTouchRipple?: boolean | undefined;
        focusRipple?: boolean | undefined;
        focusVisibleClassName?: string | undefined;
        onFocusVisible?: ((event: import("react").FocusEvent<any>) => void) | undefined;
        TouchRippleProps?: Partial<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    } & {
        button?: true | undefined;
    } & {
        alignItems?: "center" | "flex-start" | undefined;
        autoFocus?: boolean | undefined;
        button?: boolean | undefined;
        ContainerComponent?: "object" | "big" | "small" | "sub" | "sup" | "abbr" | "address" | "article" | "aside" | "b" | "bdi" | "bdo" | "blockquote" | "caption" | "cite" | "code" | "col" | "colgroup" | "dd" | "del" | "details" | "dfn" | "div" | "dt" | "em" | "embed" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "i" | "iframe" | "img" | "input" | "kbd" | "legend" | "main" | "mark" | "menu" | "meter" | "nav" | "noscript" | "output" | "p" | "picture" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "span" | "strong" | "summary" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "tr" | "u" | "var" | "wbr" | "menuitem" | "keygen" | "noindex" | "webview" | import("react").ComponentClass<import("react").HTMLAttributes<HTMLDivElement>, any> | import("react").FunctionComponent<import("react").HTMLAttributes<HTMLDivElement>> | undefined;
        ContainerProps?: import("react").HTMLAttributes<HTMLDivElement> | undefined;
        dense?: boolean | undefined;
        disabled?: boolean | undefined;
        disableGutters?: boolean | undefined;
        divider?: boolean | undefined;
        focusVisibleClassName?: string | undefined;
        selected?: boolean | undefined;
    } & import("@material-ui/core/OverridableComponent").CommonProps<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").MenuItemTypeMap<{
        button?: true | undefined;
    }, "li">>> & Pick<Pick<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "media" | "hidden" | "dir" | "slot" | "style" | "title" | "color" | "key" | "children" | "type" | "defaultValue" | "id" | "onError" | "referrerPolicy" | "target" | "ping" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "download" | "href" | "hrefLang" | "rel"> & {
        ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
    }, "media" | "hidden" | "dir" | "slot" | "title" | "color" | "key" | "ref" | "children" | "type" | "defaultValue" | "id" | "onError" | "referrerPolicy" | "target" | "ping" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "download" | "href" | "hrefLang" | "rel">) => JSX.Element) & import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").MenuItemTypeMap<{
        button?: true | undefined;
    }, "li">>>;
    Autocomplete: typeof Autocomplete;
    Collapse: import("react").ComponentType<import("@material-ui/core").CollapseProps>;
    RadioGroup: import("react").ComponentType<import("@material-ui/core").RadioGroupProps>;
    Radio: import("react").ComponentType<import("@material-ui/core").RadioProps>;
    IconButton: import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").IconButtonTypeMap<{}, "button">>;
    Menu: typeof GetAppIcon;
    Toolbar: import("react").ComponentType<import("@material-ui/core").ToolbarProps>;
    Tab: import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").TabTypeMap<{}, "div">>;
    Tabs: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").TabsTypeMap<{}, import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").ButtonBaseTypeMap<{}, "button">>>>;
    Drawer: import("react").ComponentType<import("@material-ui/core").DrawerProps>;
    List: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").ListTypeMap<{}, "ul">>;
    ListItem: import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").ListItemTypeMap<{
        button?: false | undefined;
    }, "li">> & ((props: {
        href: string;
    } & {
        action?: ((instance: import("@material-ui/core").ButtonBaseActions | null) => void) | import("react").RefObject<import("@material-ui/core").ButtonBaseActions> | null | undefined;
        buttonRef?: ((instance: unknown) => void) | import("react").RefObject<unknown> | null | undefined;
        centerRipple?: boolean | undefined;
        disabled?: boolean | undefined;
        disableRipple?: boolean | undefined;
        disableTouchRipple?: boolean | undefined;
        focusRipple?: boolean | undefined;
        focusVisibleClassName?: string | undefined;
        onFocusVisible?: ((event: import("react").FocusEvent<any>) => void) | undefined;
        TouchRippleProps?: Partial<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    } & {
        button: true;
    } & {
        alignItems?: "center" | "flex-start" | undefined;
        autoFocus?: boolean | undefined;
        button?: boolean | undefined;
        ContainerComponent?: "object" | "big" | "small" | "sub" | "sup" | "abbr" | "address" | "article" | "aside" | "b" | "bdi" | "bdo" | "blockquote" | "caption" | "cite" | "code" | "col" | "colgroup" | "dd" | "del" | "details" | "dfn" | "div" | "dt" | "em" | "embed" | "figcaption" | "figure" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "i" | "iframe" | "img" | "input" | "kbd" | "legend" | "main" | "mark" | "menu" | "meter" | "nav" | "noscript" | "output" | "p" | "picture" | "rp" | "rt" | "ruby" | "s" | "samp" | "section" | "span" | "strong" | "summary" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "tr" | "u" | "var" | "wbr" | "menuitem" | "keygen" | "noindex" | "webview" | import("react").ComponentClass<import("react").HTMLAttributes<HTMLDivElement>, any> | import("react").FunctionComponent<import("react").HTMLAttributes<HTMLDivElement>> | undefined;
        ContainerProps?: import("react").HTMLAttributes<HTMLDivElement> | undefined;
        dense?: boolean | undefined;
        disabled?: boolean | undefined;
        disableGutters?: boolean | undefined;
        divider?: boolean | undefined;
        focusVisibleClassName?: string | undefined;
        selected?: boolean | undefined;
    } & import("@material-ui/core/OverridableComponent").CommonProps<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").ListItemTypeMap<{
        button: true;
    }, "div">>> & Pick<Pick<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "media" | "hidden" | "dir" | "slot" | "style" | "title" | "color" | "key" | "children" | "type" | "defaultValue" | "id" | "onError" | "referrerPolicy" | "target" | "ping" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "download" | "href" | "hrefLang" | "rel"> & {
        ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
    }, "media" | "hidden" | "dir" | "slot" | "title" | "color" | "key" | "ref" | "children" | "type" | "defaultValue" | "id" | "onError" | "referrerPolicy" | "target" | "ping" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "download" | "href" | "hrefLang" | "rel">) => JSX.Element) & import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").ExtendButtonBaseTypeMap<import("@material-ui/core").ListItemTypeMap<{
        button: true;
    }, "div">>>;
    ListItemText: import("react").ComponentType<import("@material-ui/core").ListItemTextProps>;
    ListItemIcon: import("react").ComponentType<import("@material-ui/core").ListItemIconProps>;
    MailIcon: typeof GetAppIcon;
    InputLabel: import("react").ComponentType<import("@material-ui/core").InputLabelProps>;
    createMuiTheme: typeof createMuiTheme;
    Icon: import("react").ComponentType<import("@material-ui/core").IconProps>;
    GroupWorkIcon: typeof GetAppIcon;
    ToggleButton: import("@material-ui/core").ExtendButtonBase<import("@material-ui/lab/ToggleButton").ToggleButtonTypeMap<{}, "button">>;
    ToggleButtonGroup: typeof ToggleButtonGroup;
    Fade: import("react").ComponentType<import("@material-ui/core").FadeProps>;
    Box: import("react").ComponentType<import("@material-ui/core").BoxProps>;
    AppsIcon: typeof GetAppIcon;
    PeopleAltIcon: typeof GetAppIcon;
    BusinessIcon: typeof GetAppIcon;
    PostAddIcon: typeof GetAppIcon;
    Zoom: import("react").ComponentType<import("@material-ui/core").ZoomProps>;
    Dialog: import("react").ComponentType<import("@material-ui/core").DialogProps>;
    DialogContent: import("react").ComponentType<import("@material-ui/core").DialogContentProps>;
    AddButton: ({ title, routePath, customAction }: {
        title: any;
        routePath: any;
        customAction: any;
    }) => JSX.Element | null;
    AttachMultipleFiles: ({ id, className, changed }: {
        id: any;
        className: any;
        changed: any;
    }) => JSX.Element;
    CardControl: (props: any) => JSX.Element;
    CardsFilter: ({ onClick, filters, value }: {
        onClick: any;
        filters: any;
        value?: string | undefined;
    }) => JSX.Element;
    Error: ({ msg }: {
        msg: any;
    }) => JSX.Element;
    FilterList: (props: any) => any;
    useChipFile: (stateFiles: any, setFilesState?: null) => {
        chipDeleted: (chipToDelete: any) => () => void;
        chipClicked: (data: any) => () => void;
        chipsData: () => any[];
        chipsChanged: ({ target: { files, }, }: {
            target: {
                files: any;
            };
        }) => void;
    };
    UseFormStyles: () => any;
    BaseList: ({ data, rowRender }: {
        data: any;
        rowRender: any;
    }) => JSX.Element;
    BaseSelect: ({ e, n, v, c, d, r, disabled }: {
        e?: string | undefined;
        n: any;
        v: any;
        c: any;
        d: any;
        r?: boolean | undefined;
        disabled?: boolean | undefined;
    }) => JSX.Element;
    BreadcrumbsWrapper: ({ data }: {
        data: any;
    }) => JSX.Element;
    ChipsArray: ({ chipsData, size, chipDeleted, chipClicked }: {
        chipsData: any;
        size: any;
        chipDeleted: any;
        chipClicked: any;
    }) => JSX.Element;
    CustomCardHeader: ({ createdAt, category }: {
        createdAt?: string | undefined;
        category?: string | undefined;
    }) => JSX.Element;
    DeleteWarning: (props: any) => JSX.Element;
    DescriptionControl: ({ className, ...textFieldAttrs }: {
        [x: string]: any;
        className: any;
    }) => JSX.Element;
    FileUploadArea: ({ chipsData, chipClicked, chipDeleted }: {
        chipsData: any;
        chipClicked: any;
        chipDeleted: any;
    }) => JSX.Element;
    Header: ({ title, subtitle }: {
        title: any;
        subtitle?: string | undefined;
    }) => JSX.Element;
    KeyboardDatePickerBase: ({ value, changed, name }: {
        value: any;
        changed: any;
        name: any;
    }) => JSX.Element;
    SimpleTable: ({ rows }: {
        rows: any;
    }) => JSX.Element;
    SimpleTabs: (props: any) => JSX.Element;
    StyledRadio: (props: any) => JSX.Element;
    TitleControl: ({ className, ...textFieldAttrs }: {
        [x: string]: any;
        className: any;
    }) => JSX.Element;
    TemporaryDrawer: ({ topItems, bottomItems }: {
        topItems: any;
        bottomItems: any;
    }) => JSX.Element;
};
export default _default;
