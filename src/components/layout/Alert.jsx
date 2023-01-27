import { useContext } from "react"
import {BiErrorCircle} from 'react-icons/bi'
import AlertContext from "../../context/alertContext/AlertContext"
import { motion, AnimatePresence } from "framer-motion"

function Alert({additionalClass}) {
    const { alert } = useContext(AlertContext)

    return (
        <AnimatePresence>
        {alert !== null ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              <div className={`flex text-red-700 m-1 ${additionalClass}`} >
                <BiErrorCircle className='m-1'/>
                <strong>{alert.msg}</strong>
              </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    )

}

export default Alert
