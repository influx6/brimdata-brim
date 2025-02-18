import React from "react"
import ErrorFactory from "../models/ErrorFactory"
import Link from "./common/Link"
import {LatestError} from "./LatestError"

type Props = {children: any}
type State = {error: Error | null | undefined}

export default class AppErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {error: null}
  }

  componentDidCatch(e: Error) {
    this.setState({error: e})
  }

  render() {
    const {error} = this.state
    if (!error) return this.props.children

    return (
      <div className="error-boundary">
        <LatestError error={ErrorFactory.create(error)} />
        <div>
          <h1>Error</h1>
          <pre>{error.stack}</pre>
          <Link href="mailto:support@brimdata.io">Contact Support</Link>
        </div>
      </div>
    )
  }
}
