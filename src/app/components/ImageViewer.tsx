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
          closeTimeoutMS={500}
          isOpen={modalIsOpen}
          onRequestClose={() => toggleModal()}
          preventScroll={false}
        >
          <div
            onClick={() => toggleModal()}
            className="modal absolute left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-transparent"
          >
            <button
              className="absolute right-0 top-0 m-5"
              onClick={() => toggleModal()}
            >
              <AiOutlineClose className="h-8 w-8 font-extrabold text-blue-950 hover:text-blue-400 xl:h-10 xl:w-10" />
            </button>
            <Image
              src={imageSource}
              alt="dance-photos"
              className="max-w-screen h-auto max-h-screen w-auto p-5 sm:p-12"
            />
          </div>
        </Modal>
      )}
    </>
  )
}
