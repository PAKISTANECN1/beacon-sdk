import { Optional } from '../../../utils/utils'
import {
  AppMetadata,
  PermissionRequest,
  OperationRequest,
  SignPayloadRequest,
  BroadcastRequest
} from '../../..'

/**
 * @category Wallet
 */
export type IgnoredRequestOutputProperties = 'version'

/**
 * @category Wallet
 */
export interface ExtraResponseOutputProperties {
  appMetadata: AppMetadata
}

/**
 * @category Wallet
 */
export type PermissionRequestOutput = Optional<PermissionRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type OperationRequestOutput = Optional<OperationRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type SignPayloadRequestOutput = Optional<
  SignPayloadRequest,
  IgnoredRequestOutputProperties
> &
  ExtraResponseOutputProperties
/**
 * @category Wallet
 */
export type BroadcastRequestOutput = Optional<BroadcastRequest, IgnoredRequestOutputProperties> &
  ExtraResponseOutputProperties

/**
 * @internalapi
 * @category Wallet
 */
export type BeaconRequestOutputMessage =
  | PermissionRequestOutput
  | OperationRequestOutput
  | SignPayloadRequestOutput
  | BroadcastRequestOutput
