import {ButtonItem, ButtonImage, ImageItem} from './styledComponent'

const Buttons = props => {
  const {buttonImage, onGetId} = props
  const {id, imageUrl} = buttonImage
  const onClickImage = () => {
    onGetId(id, imageUrl)
  }
  return (
    <ButtonItem>
      <ButtonImage
        onClick={onClickImage}
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonItem>
  )
}
export default Buttons
