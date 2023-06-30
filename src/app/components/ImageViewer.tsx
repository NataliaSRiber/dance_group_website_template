import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Modal from 'react-modal'
import '../../styles/modal.css'
import { AiOutlineClose } from 'react-icons/ai'

Modal.setAppElement('body')

interface IProps {
  modalIsOpen: boolean
  toggleModal: Function
  imageSource: StaticImageData | undefined
}

export default function ImageViewer(props: IProps) {
  const { modalIsOpen, toggleModal, imageSource } = props
  return (
    <>
      {imageSource?.src && (
        <Modal
          className="modal absolute left-1/2 top-1/2 z-20 h-auto w-full -translate-x-1/2 -translate-y-1/2 px-5 xl:w-3/4"
          closeTimeoutMS={500}
          isOpen={modalIsOpen}
          onRequestClose={() => toggleModal()}
          preventScroll={false}
        >
          <>
            <button
              className="absolute right-0 top-7 mx-10"
              onClick={() => toggleModal()}
            >
              <AiOutlineClose className="h-7 w-7 text-blue-950 hover:text-blue-400" />
            </button>
            <div>
              <Image src={imageSource} alt="dance-photos" />
            </div>
          </>
        </Modal>
      )}
    </>
  )
}
