import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import parcelify from '@vtex/delivery-packages'

const Info = ({ data }) => {
  const orderWasSplit = (data.length > 1)
  const totalParcels = data.reduce((acc, currOrder) => ([...acc, ...parcelify(currOrder)]), [])
  const delivery = totalParcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const pickup = totalParcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')
  const listItem = 'tc mv0 w-80-ns w-90 center c-on-base'
  const bottomBorder = 'b--muted-4 bb'

  return (
    <Fragment>
      <ul className="mt7 mb9 list ml0 pl0 t-body bg-muted-5 pv4 tc">
        <li className={`${listItem} ${bottomBorder}`}>
          <p className="pb2">
            <FormattedMessage
              id={'warnings.payment.approval'}
            />
          </p>
        </li>
        {delivery.length > 0 &&
          (
            <Fragment>
              <li className={`${listItem} ${bottomBorder}`}>
                <p className="pv2">
                  <FormattedMessage
                    id={'warnings.delivery.time'}
                  />
                </p>
              </li>
              <li className={`${listItem} ${((orderWasSplit || pickup.length > 0) ? bottomBorder : '')}`}>
                <p className="pv2">
                  <FormattedMessage
                    id={'warnings.delivery.tracking'}
                  />
                </p>
              </li>
            </Fragment>
          )
        }
        {pickup.length > 0 &&
          <li className={`${listItem} ${orderWasSplit ? bottomBorder : ''}`}>
            <p className="pt2">
              <FormattedMessage
                id={'warnings.pickup.time'}
              />
            </p>
          </li>
        }
        {orderWasSplit &&
          <li className={listItem}>
            <p className="pt2">
              <FormattedMessage
                id={'warnings.order.split'}
                values={
                  { numOrders: data.length }
                }
              />
            </p>
          </li>
        }
      </ul>
    </Fragment>
  )
}

Info.propTypes = {
  data: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Info)
